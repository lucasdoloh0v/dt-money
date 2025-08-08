import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { LoginHeader } from './Components/LoginHeader'
import { signUp } from 'aws-amplify/auth'
import { api } from './lib/axios'

import type { SignUpInput, SignUpOutput } from 'aws-amplify/auth'

const services = {
    async handleSignUp(input: SignUpInput): Promise<SignUpOutput> {
      const response = await signUp(input)

      const email = input.options?.userAttributes?.email
      const name = input.options?.userAttributes?.name

      if (response.userId ) {
        await api.post('/users', {
          userId: response.userId,
          email: email,
          name: name,
        })
      }
      return response
    },
  }

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

const AppComponent = import.meta.env.VITE_AMBIENT === 'DEV' 
  ? withAuthenticator(App, {
    components: {
      Header: LoginHeader,
    },
    loginMechanisms: ['email'],
    signUpAttributes: ['name', 'email'],
    services: services,
  })
  : App

export { AppComponent as App }
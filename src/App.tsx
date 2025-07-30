import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { LoginHeader } from './Components/LoginHeader'

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

console.log(import.meta.env.VITE_AMBIENT)

const AppComponent = import.meta.env.VITE_AMBIENT === 'DEV' 
  ? withAuthenticator(App, {
    components: {
      Header: LoginHeader,
    },
    loginMechanisms: ['email'],
    signUpAttributes: ['name', 'email'],
  })
  : App

export { AppComponent as App }
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../Components/Header'
import { SearchForm } from '../../Components/SearchForm'
import { Summary } from '../../Components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formater'
import { Container, PriceHighlight, TransactionsTable } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { useEffect } from 'react'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const { signOut } = useAuthenticator((context) => [context.signOut])

  const handleSignOut = () => {
    signOut()
  }

  useEffect(() => {
    const getUser = async () => {
      const a = await fetchUserAttributes()
      console.log(a)
    }

    getUser()
  }, [])

  return (
    <>
      <Header onSignOut={handleSignOut} />
      <Summary />

      <Container>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  )
}

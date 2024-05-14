import { useContextSelector } from 'use-context-selector'
import { Header } from '../../Components/Header'
import { SearchForm } from '../../Components/SearchForm'
import { Summary } from '../../Components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formater'
import { Container, PriceHighlight, TransactionsTable } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
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

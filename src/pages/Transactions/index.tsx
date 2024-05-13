import { Header } from '../../Components/Header'
import { SearchForm } from '../../Components/SearchForm'
import { Summary } from '../../Components/Summary'
import { Container, PriceHighlight, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <Container>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">desenvolvimento de site</td>
              <PriceHighlight>R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">comida</td>
              <PriceHighlight variant="outcome">- R$ 12.000,00</PriceHighlight>
              <td>alimentação</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">desenvolvimento de site</td>
              <PriceHighlight>R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">desenvolvimento de site</td>
              <PriceHighlight>R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">desenvolvimento de site</td>
              <PriceHighlight>R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">desenvolvimento de site</td>
              <PriceHighlight>R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  )
}

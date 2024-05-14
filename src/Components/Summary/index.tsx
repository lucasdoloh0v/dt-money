import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Card, Container } from './styles'
import { priceFormatter } from '../../utils/formater'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <Container>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </Card>

      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </Card>

      <Card isTotalCard={true}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </Card>
    </Container>
  )
}

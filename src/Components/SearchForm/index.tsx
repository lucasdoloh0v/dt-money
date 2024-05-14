import { MagnifyingGlass } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type FormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: FormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}

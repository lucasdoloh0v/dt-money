import { MagnifyingGlass } from 'phosphor-react'
import { Container } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'

const searchFormSchema = z.object({
  query: z.string(),
})

type FormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

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

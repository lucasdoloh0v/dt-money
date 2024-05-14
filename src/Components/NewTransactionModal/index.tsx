import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  CloseBtn,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'

const newTransactionFormSchema = z.object({
  description: z.string().min(1, 'Descreva sua transação'),
  price: z
    .number({ required_error: 'Informe o valor da transação' })
    .min(1, 'Informe o valor da transação'),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type FormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { register, handleSubmit, control, reset } = useForm<FormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const { createTransaction } = useTransactions()

  function handleCreateNewTransaction(data: FormInputs) {
    createTransaction(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseBtn>
          <X size={24} />
        </CloseBtn>

        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

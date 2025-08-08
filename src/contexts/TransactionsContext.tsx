import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Transaction {
  id: string
  userId: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionResp {
  id: string
  'user-id': string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  'created-at': string
}

interface TransactionPostResp {
  message: string,
  transaction: TransactionResp
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<TransactionResp[]>('/transactions', {
      params: {
        q: query,
      },
    })

    const formattedData = data.map((transaction) => ({
      id: transaction.id,
      userId: transaction['user-id'],
      description: transaction.description,
      type: transaction.type,
      price: transaction.price,
      category: transaction.category,
      createdAt: transaction['created-at'],
    }))

    console.log('Fetched transactions:', formattedData)

    setTransactions(formattedData)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  const createTransaction = async (data: CreateTransactionInput) => {
    const response = await api.post<TransactionPostResp>('/transactions', {
      ...data,
    })

    setTransactions((prev) => [...prev, {
      id: response.data.transaction.id,
      userId: response.data.transaction['user-id'],
      description: response.data.transaction.description,
      type: response.data.transaction.type,
      price: response.data.transaction.price,
      category: response.data.transaction.category,
      createdAt: response.data.transaction['created-at'],
    }])
  }
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

import { useContextSelector } from 'use-context-selector';
import { Header } from '../../Components/Header';
import { SearchForm } from '../../Components/SearchForm';
import { Summary } from '../../Components/Summary';
import { dateFormatter, priceFormatter } from '../../utils/formater';
import { Container, PriceHighlight, TransactionsTable } from './styles';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Loading } from '../../Components/Loading';

export function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const { signOut } = useAuthenticator((context) => [context.signOut]);

  useEffect(() => {
    const getUser = async () => {
      try {
        await fetchUserAttributes();
      } catch (error) {
        console.error('Error fetching user attributes:', error);
        await signOut();
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
                  <td width='50%'>{transaction.description}</td>
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
              );
            })}
          </tbody>
        </TransactionsTable>
      </Container>
    </>
  );
}

import * as Dialog from '@radix-ui/react-dialog';

import { Container, Content, RightSection } from './styles';

import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { UserMenu } from '../UserMenu';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='' />
        <RightSection>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Nova transação</button>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
          <UserMenu />
        </RightSection>
      </Content>
    </Container>
  );
}

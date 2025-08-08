import * as Dialog from '@radix-ui/react-dialog';

import { Container, Content, RightSection } from './styles';

import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { UserMenu } from '../UserMenu';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='' />
        <RightSection>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button>Nova transação</button>
            </Dialog.Trigger>

            <NewTransactionModal setOpen={setOpen} />
          </Dialog.Root>
          <UserMenu />
        </RightSection>
      </Content>
    </Container>
  );
}

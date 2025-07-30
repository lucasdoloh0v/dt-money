import * as Dialog from '@radix-ui/react-dialog'

import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header({ onSignOut }: { onSignOut: () => void }) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <button onClick={onSignOut}>Sair</button>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Content>
    </Container>
  )
}

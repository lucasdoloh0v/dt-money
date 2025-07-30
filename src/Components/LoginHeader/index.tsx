import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

export function LoginHeader() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
    </Container>
  )
}
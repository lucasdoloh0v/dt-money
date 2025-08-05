import { fetchUserAttributes, signOut } from "aws-amplify/auth"
import { useState, useEffect } from "react"
import { Container, Avatar, Popover, PopoverItem, UserName } from "./styles"
import { UserCircle } from "phosphor-react"

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setUserName] = useState('Usuário')

  useEffect(() => {
    const loadUser = async () => {
      try {
        const attributes = await fetchUserAttributes()
        const name = attributes?.name
        if (!name) {
          throw new Error('Nome não encontrado')
        }
        setUserName(name)
      } catch {
        setUserName('Desconhecido')
      }
    }

    loadUser()
  }, [])

  const handleSignOut = async () => {
    await signOut()
    window.location.reload()
  }

  return (
    <Container>
      <Avatar onClick={() => setIsOpen(!isOpen)}>
        <UserCircle weight="fill" />
      </Avatar>
      <UserName>{userName}</UserName>

      {isOpen && (
        <Popover>
          <PopoverItem onClick={handleSignOut}>Sair</PopoverItem>
        </Popover>
      )}
    </Container>
  )
}
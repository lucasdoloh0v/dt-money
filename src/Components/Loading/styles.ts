import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme['gray-700']};
  border-top: 4px solid ${({ theme }) => theme['green-500'] || '#00b37e'};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${rotate} 1s linear infinite;
`

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme['gray-100']}
`
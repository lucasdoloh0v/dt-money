import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    background: transparent;
    padding: 1rem;
    border-radius: 6px;
    font-weight: bold;

    &:hover {
      border: 1px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      transition:
        background 0.2s,
        color 0.2s,
        border 0.2s;
    }
  }
`

import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
`

export const Avatar = styled.div`
  background-color: ${({ theme }) => theme['green-300']};
  color: white;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    opacity: 0.85;
  }
`

export const UserName = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme['gray-300']};
  text-align: center;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Popover = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  z-index: 10;
  min-width: 150px;
`

export const PopoverItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: inherit;
  text-align: left;
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    color: ${({ theme }) => theme['green-500']};
  }
`
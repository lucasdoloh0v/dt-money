import { LoadingContainer, Spinner } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <p>Carregando...</p>
    </LoadingContainer>
  )
}
import { StyledContainer } from './styled'

const Container = ({ children, ...props }: any) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container

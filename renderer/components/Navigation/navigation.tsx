import { Container } from '@electron/ui'
import { useNavigation } from '@hooks/Navigation'

const Navigation = () => {
  const { categoryTree } = useNavigation()

  return (
    <nav>
      <Container>
        <p>{categoryTree.length}</p>
      </Container>
    </nav>
  )
}

export default Navigation

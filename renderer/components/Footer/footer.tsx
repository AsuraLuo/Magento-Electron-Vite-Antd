import { useSelector } from 'react-redux'

import { Container } from '@electron/ui'

const Footer = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)

  return (
    <footer>
      <Container>
        <p dangerouslySetInnerHTML={{ __html: storeConfig.copyright }} />
      </Container>
    </footer>
  )
}

export default Footer

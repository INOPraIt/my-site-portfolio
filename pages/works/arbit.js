import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="B2B">
    <Container>
      <Title>
        B2B Marketplace <Badge>2022</Badge>
      </Title>
      <P>
        The site is designed to teach people how to earn money with cryptocurrency. 
        The site is made on React, deployed on parcel. 
        The redux-saga library was used for the front-end request logic.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Redux, Redux-saga, Html, Scss, Adaptive layout
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/arbit_eyecatch.png" alt="arbit" />
      <WorkImage src="/images/works/arbit_01.png" alt="arbit" />
      <WorkImage src="/images/works/arbit_02.png" alt="arbit" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

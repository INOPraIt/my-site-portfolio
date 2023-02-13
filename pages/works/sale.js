import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="B2B">
    <Container>
      <Title>
        Site-sale <Badge>2022</Badge>
      </Title>
      <P>
        I developed this site to order for a freelance client. 
        The main feature of the site is the sale of web/android/ios applications. 
        On this project, in addition to the front-end, I also developed 
        a nodeJS server using the mongoDb database.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Redux, Redux-toolkit, RTK, NodeJS, MongoDB, Mongoose, Html, Css, Adaptive layout
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/sale_eyecatch.png" alt="arbit" />
      <WorkImage src="/images/works/sale_01.png" alt="arbit" />
      <WorkImage src="/images/works/sale_02.png" alt="arbit" />
      <WorkImage src="/images/works/sale_03.png" alt="arbit" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

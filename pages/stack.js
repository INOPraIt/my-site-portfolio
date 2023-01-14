import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const stack = [
  'Html',
  'Css',
  'jQuery',
  'Javascript',
  'Typescript',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Fastify.js',
  'Next.js',
  'React.js',
  'Redux',
  'Redux-saga',
  'Redux-toolkit',
  'React Native',
  'Tailwindcss',
  'Git',
  'Parcel',
  'Create-react-app',
  'Less',
  'Scss',
  'Sass'
].join(' • ');

const Stack = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Stack
      </Heading>
      <Box mb="4">{stack}</Box>
    </Container>
  </Layout>
)

export default Stack
export { getServerSideProps } from '../components/chakra'

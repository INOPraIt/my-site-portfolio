import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWierdmerch from '../public/images/works/wierdmerch_eyecatch.jpg'
import thumbB2B from '../public/images/works/b2b_eyecatch.png'
import thumbArbit from '../public/images/works/arbit_eyecatch.png'
import thumbSale from '../public/images/works/sale_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="b2b" title="B2B marketplace" thumbnail={thumbB2B}>
            A B2B marketplace app with chat and personal pricings for each buyer
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="wierdmerch"
            title="Weird Merch"
            thumbnail={thumbWierdmerch}
          >
            Custom clothing marketplace
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sale"
            title="SiteSale"
            thumbnail={thumbSale}
          >
            Cryptocurrency arbitrage service
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

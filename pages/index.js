import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
import IoLogoTelegram from '../components/icons/telegram'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Russia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} mb={5}>
          <Heading as="h2" variant="page-title">
            Dmitry Ryzhev
          </Heading>
          <p>Front-end web developer</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Dmitry is a freelance and a full-stack developer based in Yaroslavl
          with a passion for building digital services/stuff he wants. He has a
          knack for all things launching products, from planning and designing
          all the way to solving real-life problems with code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Moscow, Russia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          I started programming by studying html, css and js. I also studied 
          video editing, photoshop and after effects in parallel.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
            Worked as a freelancer while doing pet projects
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          He taught react, redux-toolkit, redux-saga, and also studied how server 
          technologies such as node js, express, mongodb db and mongoose work.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Сomputer-science, Installation-vidios
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/INOPraIt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gmail.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                ryzevdmitrij@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/Ryzhev_3301" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTelegram />}
              >
                telegram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

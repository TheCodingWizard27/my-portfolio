import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioTitle } from '../components/bio'
import Layout from '../components/layouts/page-layout'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

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
        Hello, World! I&apos;m excited to see you here, feel free to look around!
      </Box>

      <Box>
        <Heading as="h2" variant="page-title">
          Raunak Upreti
        </Heading>
        <p>Software Engineer / Full-Stack Developer</p>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
           I&apos;m a recent Computer Science graduate from the University of North Texas
                with experience in Full-Stack Development, System Optimization, and IT
                solutions. Passionate about problem-solving and staying updated with emerging
                technologies, I am always eager to learn and adapt. Beyond coding, I love to travel,
                watch documentaries, play video games, dive into anime, and play
                basketball.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="./public/Resume.pdf"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
          >
            View my resume
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioTitle>Education</BioTitle>
          University of North Texas
        </BioSection>
        <BioSection>
          <BioTitle>Experience</BioTitle>
          Software Engineer Intern at Ergool.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Technology, Travelling, Watching Documentaries, Playing Video Games, 
          Watch Anime, Play Basketball, Coffee ☕
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <SimpleGrid columns={2} spacing={4} pt={4}>
          <Link href="https://github.com/TheCodingWizard27" target="_blank">
            <Button
              variant="solid"
              colorScheme="gray"
              leftIcon={<IoLogoGithub />}
              borderRadius="full"
              _hover={{
                bg: "purple.500",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
              width="full"
            >
              @TheCodingWizard27
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/raunakupreti" target="_blank">
            <Button
              variant="solid"
              colorScheme="blue"
              leftIcon={<IoLogoLinkedin />}
              borderRadius="full"
              _hover={{
                bg: "teal.500",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
              width="full"
            >
              LinkedIn
            </Button>
          </Link>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
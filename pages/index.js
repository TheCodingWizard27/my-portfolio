import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  SimpleGrid,
  HStack,
  Text,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/page-layout'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { FaCode, FaPlane, FaFilm, FaGamepad, FaTv, FaBasketballBall, FaCoffee } from 'react-icons/fa'

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
          Who am I?
        </Heading>
        <Paragraph>
          I am a recent Computer Science graduate from the University of North Texas
                with experience in Full-Stack Development, System Optimization, and IT
                solutions. Passionate about problem-solving and staying updated with emerging
                technologies, I am always eager to learn and adapt.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as="a"
            href="documents/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            rightIcon={<ChevronRightIcon />}
            bg="#00A86B"
            color={useColorModeValue('white', 'black')}
            _hover={{ bg: "#008B5A" }}
            css={{
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)'
                },
                '40%': {
                  transform: 'translateY(-10px)'
                },
                '60%': {
                  transform: 'translateY(-5px)'
                }
              },
              animation: 'bounce 2s infinite'
            }}
          >
            View my Resume
          </Button>
        </Box>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
           I ♥
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4} pt={4}>
          <HStack spacing={2}>
            <Icon as={FaCode} color="#00A86B" />
            <Text fontSize="sm">Technology</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaPlane} color="#00A86B" />
            <Text fontSize="sm">Travelling</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaFilm} color="#00A86B" />
            <Text fontSize="sm">Documentaries</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaGamepad} color="#00A86B" />
            <Text fontSize="sm">Video Games</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaTv} color="#00A86B" />
            <Text fontSize="sm">Anime</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaBasketballBall} color="#00A86B" />
            <Text fontSize="sm">Basketball</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaCoffee} color="#00A86B" />
            <Text fontSize="sm">Coffee</Text>
          </HStack>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Let&apos;s connect
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} pt={4}>
          <Link href="https://github.com/TheCodingWizard27" target="_blank">
            <Button
              variant="solid"
              colorScheme="gray"
              leftIcon={<IoLogoGithub />}
              borderRadius="full"
              _hover={{
                bg: "#6e5494",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
              width="full"
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/raunakupreti" target="_blank">
            <Button
              variant="solid"
              colorScheme="blue"
              leftIcon={<IoLogoLinkedin />}
              borderRadius="full"
              _hover={{
                bg: "#0077B5",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
              width="full"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:raunakupreti2002@gmail.com" target="_blank">
            <Button
              variant="solid"
              colorScheme="red"
              leftIcon={<IoMail />}
              borderRadius="full"
              _hover={{
                bg: "#D44638",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
              width="full"
            >
              Email
            </Button>
          </Link>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
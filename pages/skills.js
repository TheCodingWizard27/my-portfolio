import { Container, Heading, SimpleGrid, Box, Text, Icon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'

const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Skills
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[2, 3, 3]} gap={6}>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiHtml5} boxSize={8} color="#E34F26" mb={2} />
            <Text fontWeight="bold">HTML</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiCss3} boxSize={8} color="#1572B6" mb={2} />
            <Text fontWeight="bold">CSS</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiJavascript} boxSize={8} color="#F7DF1E" mb={2} />
            <Text fontWeight="bold">JavaScript</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiTypescript} boxSize={8} color="#3178C6" mb={2} />
            <Text fontWeight="bold">TypeScript</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiReact} boxSize={8} color="#61DAFB" mb={2} />
            <Text fontWeight="bold">React</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiNextdotjs} boxSize={8} color="currentColor" mb={2} />
            <Text fontWeight="bold">Next.js</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiTailwindcss} boxSize={8} color="#06B6D4" mb={2} />
            <Text fontWeight="bold">Tailwind CSS</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiMongodb} boxSize={8} color="#47A248" mb={2} />
            <Text fontWeight="bold">MongoDB</Text>
          </Box>
          <Box p={4} bg="whiteAlpha.100" borderRadius="lg" textAlign="center">
            <Icon as={SiPostgresql} boxSize={8} color="#336791" mb={2} />
            <Text fontWeight="bold">PostgreSQL</Text>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
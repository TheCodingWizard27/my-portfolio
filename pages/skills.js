import { Container, Heading, SimpleGrid, Box, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/page-layout'
import Section from '../components/section'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiC, SiCplusplus, SiPython, SiDjango } from 'react-icons/si'

const SkillCard = ({ icon, name, color }) => {
  const bg = useColorModeValue('white', 'whiteAlpha.50')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('gray.200', 'transparent')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')
  
  return (
    <Box
      p={6}
      bg={bg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      textAlign="center"
      cursor="pointer"
      position="relative"
      transition="all 0.3s ease"
      boxShadow={useColorModeValue('0 2px 8px rgba(0,0,0,0.08)', 'none')}
      _hover={{
        bg: hoverBg,
        transform: 'translateY(-4px)',
        boxShadow: `0 8px 25px ${shadowColor}`,
        borderColor: useColorModeValue('gray.300', 'whiteAlpha.200'),
      }}
      _active={{
        transform: 'translateY(-2px)',
      }}
      title={name}
    >
      <Icon 
        as={icon} 
        boxSize={14} 
        color={color} 
        transition="transform 0.3s ease"
        _hover={{ transform: 'scale(1.1)' }}
      />
    </Box>
  )
}

const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={6}>
        Skills
      </Heading>

      <Section delay={0.1}>
        <Heading as="h4" fontSize={16} mb={4} color="gray.500">
          Programming Languages
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} gap={6} mb={8}>
          <SkillCard icon={SiC} name="C" color="#A8B9CC" />
          <SkillCard icon={SiCplusplus} name="C++" color="#00599C" />
          <SkillCard icon={SiPython} name="Python" color="#3776AB" />
          <SkillCard icon={SiJavascript} name="JavaScript" color="#F7DF1E" />
          <SkillCard icon={SiTypescript} name="TypeScript" color="#3178C6" />
        </SimpleGrid>

        <Heading as="h4" fontSize={16} mb={4} color="gray.500">
          Web Technologies
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} gap={6} mb={8}>
          <SkillCard icon={SiHtml5} name="HTML" color="#E34F26" />
          <SkillCard icon={SiCss3} name="CSS" color="#1572B6" />
          <SkillCard icon={SiReact} name="React" color="#61DAFB" />
          <SkillCard icon={SiNextdotjs} name="Next.js" color="currentColor" />
          <SkillCard icon={SiTailwindcss} name="Tailwind CSS" color="#06B6D4" />
        </SimpleGrid>

        <Heading as="h4" fontSize={16} mb={4} color="gray.500">
          Frameworks & Databases
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} gap={6}>
          <SkillCard icon={SiDjango} name="Django" color="#092E20" />
          <SkillCard icon={SiFirebase} name="Firebase" color="#FFCA28" />
          <SkillCard icon={SiMongodb} name="MongoDB" color="#47A248" />
          <SkillCard icon={SiPostgresql} name="PostgreSQL" color="#336791" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
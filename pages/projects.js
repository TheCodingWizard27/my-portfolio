import { Container, Heading, SimpleGrid, Box, Text, Link, Badge, useColorModeValue, Image, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/page-layout'
import { IoLogoGithub, IoGlobe } from 'react-icons/io5'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiFirebase, SiChakraui, SiFramer, SiTypescript, SiTailwindcss, SiChartdotjs } from 'react-icons/si'

const getTechnologyIcon = (tech) => {
  const iconMap = {
    'React': <FaReact color="#61DAFB" />,
    'Node.js': <FaNodeJs color="#339933" />,
    'JavaScript': <FaJs color="#F7DF1E" />,
    'HTML5': <FaHtml5 color="#E34F26" />,
    'CSS': <FaCss3Alt color="#1572B6" />,
    'Next.js': <SiNextdotjs color="#000000" />,
    'Express': <SiExpress color="#000000" />,
    'Firebase': <SiFirebase color="#FFCA28" />,
    'Chakra UI': <SiChakraui color="#319795" />,
    'Framer Motion': <SiFramer color="#0055FF" />,
    'TypeScript': <SiTypescript color="#3178C6" />,
    'Tailwind CSS': <SiTailwindcss color="#06B6D4" />,
    'Chart.js': <SiChartdotjs color="#FF6384" />,
    'Weather API': <IoGlobe color="#4A90E2" />
  }
  return iconMap[tech] || <Text fontSize="xs">{tech}</Text>
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, imageUrl }) => (
  <Box>
    <Image 
      src={imageUrl} 
      alt={title}
      borderRadius="lg"
      mb={4}
      width="100%"
      height="200px"
      objectFit="cover"
      _hover={{ transform: 'scale(1.05)' }}
      transition="transform 0.3s ease"
    />
    
    <Heading as="h3" size="md" mb={3} textAlign="center">
      {title}
    </Heading>
    
    <Text mb={4} color={useColorModeValue('gray.600', 'gray.300')} textAlign="center">
      {description}
    </Text>
    
    <Flex mb={4} justify="center" align="center" wrap="wrap" gap={3}>
      {technologies.map((tech, index) => (
        <Box key={index} display="flex" alignItems="center" justifyContent="center" fontSize="2xl">
          {getTechnologyIcon(tech)}
        </Box>
      ))}
    </Flex>

    <Flex gap={3} justify="center" align="center">
      {githubUrl && (
        <Link href={githubUrl} target="_blank" _hover={{ textDecoration: 'none' }}>
          <Box display="flex" alignItems="center" gap={1} _hover={{ color: '#00A86B' }}>
            <IoLogoGithub /> GitHub
          </Box>
        </Link>
      )}
      {liveUrl && (
        <Link href={liveUrl} target="_blank" _hover={{ textDecoration: 'none' }}>
          <Box display="flex" alignItems="center" gap={1} _hover={{ color: '#00A86B' }}>
            <IoGlobe /> Live Demo
          </Box>
        </Link>
      )}
    </Flex>
  </Box>
)

const projects = [
   {
    title: "Shop-Simplify",
    description: "A streamlined platform for local buying and selling, featuring secure transactions and real-time messaging.",
    technologies: ["React", "Node.js", "Express", "Firebase"],
    githubUrl: "https://github.com/chimpiriudaykiran/MarketPlace.git",
    liveUrl: "https://shop-simplify.vercel.app/",
    imageUrl: "/images/ss-screenshot.png"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Chakra UI, featuring dark/light mode toggle and smooth animations.",
    technologies: ["Next.js", "React", "Chakra UI", "Framer Motion"],
    githubUrl: "https://github.com/TheCodingWizard27/my-portfolio",
    liveUrl: "https://raunakupreti.vercel.app",
    imageUrl: "/images/portfolio-screenshot.png"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce management with analytics, inventory tracking, and order management features.",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/TheCodingWizard27/ecommerce-dashboard",
    imageUrl: "/images/ecommerce-dashboard-screenshot.png"
  },
  {
    title: "Weather App",
    description: "A weather application that displays current weather and 5-day forecast with geolocation support and responsive design.",
    technologies: ["JavaScript", "CSS", "Weather API", "HTML5"],
    githubUrl: "https://github.com/TheCodingWizard27/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
    imageUrl: "/images/weather-app-screenshot.png"
  }
]

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
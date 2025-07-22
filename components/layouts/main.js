import Head from 'next/head'
import NavBar from '../navBar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Image from 'next/image'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon" />
        <title>Raunak Upreti - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={32}>
        <Box textAlign="center" mb={6}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/raunak.jpg"
              alt="Profile image"
              width="150"
              height="150"
            />
          </Box>
        </Box>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
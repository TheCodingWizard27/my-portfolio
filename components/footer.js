import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={8}>
      &copy; {new Date().getFullYear()} Raunak Upreti. All Rights Reserved.
    </Box>
  )
}

export default Footer
import { Box, Container, Stack, Text, Link, IconButton } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" mt="auto">
      <Container maxW="1280px" py={8}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text>
            © {new Date().getFullYear()} KompaNou Events. All rights reserved.
          </Text>
          <Stack direction="row" spacing={4}>
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="md"
              colorScheme="blue"
              variant="ghost"
              isExternal
            />
            <IconButton
              as={Link}
              href="https://instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="md"
              colorScheme="blue"
              variant="ghost"
              isExternal
            />
            <IconButton
              as={Link}
              href="https://facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook />}
              size="md"
              colorScheme="blue"
              variant="ghost"
              isExternal
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 
import { Box, Flex, Link, Container } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box width="full" borderBottom="1px" borderColor="gray.100" bg="white" shadow="sm">
      <Flex justify="center" width="full">
        <Container 
          maxW="1280px" 
          w="100%"
          px={4}
        >
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color="blue.700">
                KompaNou Events
              </Link>
            </Flex>

            <Flex alignItems="center" gap={6}>
              <Link as={RouterLink} to="/" color="gray.700" _hover={{ color: 'blue.600' }}>
                Home
              </Link>
              <Link as={RouterLink} to="/privacy-policy" color="gray.700" _hover={{ color: 'blue.600' }}>
                Privacy Policy
              </Link>
              <Link as={RouterLink} to="/terms-of-use" color="gray.700" _hover={{ color: 'blue.600' }}>
                Terms of Use
              </Link>
              <Link as={RouterLink} to="/retention" color="gray.700" _hover={{ color: 'blue.600' }}>
                Retention
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  )
}

export default Navbar 
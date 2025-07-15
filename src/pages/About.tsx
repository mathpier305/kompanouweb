import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'KompaNou Events';
  }, []);
  return (
    <Flex minH="full" align="center" justify="center" w="100%">
      <VStack spacing={8} alignItems="center" w="100%" py={10}>
        <Box textAlign="center" maxW="800px" px={4}>
          <Heading size="xl" mb={4}>
            About
          </Heading>
          <Text fontSize="lg" color="gray.600" lineHeight="tall">
            Welcome to my website. This is the about page.
          </Text>
        </Box>
      </VStack>
    </Flex>
  )
}

export default About 
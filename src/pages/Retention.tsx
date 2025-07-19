import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'
import { useEffect } from 'react'

const Retention = () => {
  useEffect(() => {
    document.title = 'KompaNou Events';
  }, []);
  return (
  <Container maxW="800px" py={16} bg="transparent">
    <VStack spacing={8} align="start">
      <Heading as="h1" size="xl" mb={4} color="white">
        Data Retention Policy
      </Heading>
      <Text fontSize="md" color="white">
        At KompaNou Events, we value your privacy and are committed to being transparent about how long we retain your data.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        How Long We Keep Your Data
      </Heading>
      <Text fontSize="md" color="white">
        We retain your personal information only as long as necessary to provide our services and fulfill the purposes described in our Privacy Policy. When your data is no longer needed, we securely delete or anonymize it.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Your Rights
      </Heading>
      <Text fontSize="md" color="white">
        You have the right to request deletion of your data at any time. Please contact us if you wish to review, update, or delete your information.
      </Text>
      <Text fontSize="sm" color="gray.200" mt={8}>
        Last updated: May 2024
      </Text>
    </VStack>
  </Container>
)
}

export default Retention 
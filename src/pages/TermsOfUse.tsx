import { useEffect } from 'react'
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'

const TermsOfUse = () => {
  useEffect(() => {
    document.title = 'KompaNou Events';
  }, []);
  return (
  <Container maxW="800px" py={16} bg="transparent">
    <VStack spacing={8} align="start">
      <Heading as="h1" size="xl" mb={4} color="white">
        Terms of Use
      </Heading>
      <Text fontSize="md" color="white">
        Welcome to KompaNou Events! By using our app and website, you agree to the following terms and conditions. Please read them carefully.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Use of Service
      </Heading>
      <Text fontSize="md" color="white">
        You may use our services for personal, non-commercial purposes only. You agree not to misuse the app or website in any way that could harm KompaNou Events or other users.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Intellectual Property
      </Heading>
      <Text fontSize="md" color="white">
        All content, trademarks, and data on this app and website are the property of KompaNou Events or its licensors. You may not copy, reproduce, or distribute any part of our content without permission.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Limitation of Liability
      </Heading>
      <Text fontSize="md" color="white">
        KompaNou Events is not liable for any damages or losses resulting from your use of our app or website. Use our services at your own risk.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Changes to Terms
      </Heading>
      <Text fontSize="md" color="white">
        We may update these terms from time to time. Continued use of our services means you accept the revised terms.
      </Text>
      <Text fontSize="sm" color="gray.200" mt={8}>
        Last updated: May 2024
      </Text>
    </VStack>
  </Container>
  )
}

export default TermsOfUse 
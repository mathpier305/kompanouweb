import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'
import { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'KompaNou Events';
  }, []);
  return (
  <Container maxW="800px" py={16} bg="transparent">
    <VStack spacing={8} align="start">
      <Heading as="h1" size="xl" mb={4} color="white">
        Privacy Policy
      </Heading>
      <Text fontSize="md" color="white">
        KompaNou Events is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our app and website.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Information We Collect
      </Heading>
      <Text fontSize="md" color="white">
        We may collect information such as your name, email address, and device information to provide you with the best experience. We do not sell or share your personal information with third parties except as required by law.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        How We Use Your Information
      </Heading>
      <Text fontSize="md" color="white">
        Your information is used to personalize your experience, improve our services, and communicate important updates. We may also use aggregated, anonymized data for analytics purposes.
      </Text>
      <Heading as="h2" size="md" mt={8} color="white">
        Your Choices
      </Heading>
      <Text fontSize="md" color="white">
        You can review, update, or delete your information at any time by contacting us. By using our app, you consent to this privacy policy.
      </Text>
      <Text fontSize="sm" color="gray.200" mt={8}>
        Last updated: May 2024
      </Text>
    </VStack>
  </Container>
  )
}

export default PrivacyPolicy 
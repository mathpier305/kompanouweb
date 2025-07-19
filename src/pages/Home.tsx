import { Box, Heading, Text, VStack, Flex, Button, Image, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import myImage from '../assets/image_for_app.jpeg'
import { FaGooglePlay, FaMobileAlt } from 'react-icons/fa'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'KompaNou Events';
  }, []);
  return (
    <Flex minH="full" direction="column" align="center" w="100%">
      {/* App Promotion Hero Section */}
      <Box 
        w="100%" 
        bgGradient="linear(to-br, blue.600, purple.600)"
        color="white" 
        py={20}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgImage: "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 0)",
          bgSize: "40px 40px",
          animation: "sparkle 3s linear infinite",
        }}
      >
        {/* Decorative circles */}
        <Box
          position="absolute"
          top="-10%"
          left="-5%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="rgba(255,255,255,0.1)"
          filter="blur(40px)"
        />
        <Box
          position="absolute"
          bottom="-15%"
          right="-10%"
          w="400px"
          h="400px"
          borderRadius="full"
          bg="rgba(255,255,255,0.1)"
          filter="blur(60px)"
        />
        
        <Flex 
          maxW="1280px" 
          mx="auto" 
          px={4} 
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
          position="relative"
          zIndex={1}
        >
          <VStack 
            spacing={6} 
            align={{ base: "center", md: "flex-start" }}
            maxW="600px"
          >
            <Icon as={FaMobileAlt} boxSize={12} />
            <Heading 
              size="2xl" 
              mb={2}
              textShadow="0 2px 4px rgba(0,0,0,0.2)"
            >
              Download KompaNou Events App
            </Heading>
            <Text 
              fontSize="xl" 
              fontWeight="medium"
              textShadow="0 1px 2px rgba(0,0,0,0.2)"
            >
              Your Ultimate Haitian Music Events Companion
            </Text>
            <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
              <Text 
                fontSize="lg"
                textShadow="0 1px 2px rgba(0,0,0,0.2)"
              >
                ✓ Discover upcoming events
              </Text>
              <Text 
                fontSize="lg"
                textShadow="0 1px 2px rgba(0,0,0,0.2)"
              >
                ✓ All the details: dates, times, and venues at your fingertips
              </Text>
              <Text 
                fontSize="lg"
                textShadow="0 1px 2px rgba(0,0,0,0.2)"
              >
                ✓ Get exclusive event updates
              </Text>
            </VStack>
            <Button
              as="a"
              href="https://play.google.com/store/apps/details?id=com.app.kompanouevent"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGooglePlay size="24px" />}
              size="lg"
              colorScheme="whiteAlpha"
              px={8}
              fontSize="lg"
              _hover={{ 
                transform: 'scale(1.05)',
                bg: 'rgba(255,255,255,0.9)'
              }}
              transition="all 0.2s"
              backdropFilter="blur(8px)"
              bg="rgba(255,255,255,0.8)"
              color="blue.700"
            >
              Get it on Google Play
            </Button>
          </VStack>

          <Box 
            flex="1" 
            maxW={{ base: "280px", md: "320px" }}
            display="flex"
            justifyContent="center"
            position="relative"
            height={{ base: "400px", md: "500px" }}
            borderRadius="2xl"
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset="0"
              bgGradient="linear(to-b, transparent 50%, rgba(0,0,0,0.8))"
              zIndex={1}
              pointerEvents="none"
            />
            <a
              href="https://play.google.com/store/apps/details?id=com.app.kompanouevent"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              <Image
                src={myImage}
                alt="Vibrant concert celebration"
                objectFit="cover"
                width="100%"
                height="100%"
                transform="scale(1.1)"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.15)" }}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

// Add keyframes for the sparkle animation
const style = document.createElement('style')
style.textContent = `
  @keyframes sparkle {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 40px;
    }
  }
`
document.head.appendChild(style)

export default Home 
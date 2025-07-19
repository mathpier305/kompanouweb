import { Box, Container, Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Retention from './pages/Retention'

function App() {
  return (
    <Box 
      minH="100vh"
      w="100vw"
      bg="red.900" 
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        w="100%"
        maxW="100vw"
        bgGradient="linear(to-b, red.400, red.500)"
        minH="100vh"
        display="flex"
        flexDirection="column"
        boxShadow="inner"
      >
        <Router>
          <Navbar />
          <Flex justify="center" width="full" flex="1">
            <Container 
              maxW={{ base: "100%", lg: "1280px" }}
              w="100%"
              py={8} 
              px={4}
              display="flex"
              flexDirection="column"
            >
              <Box flex="1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-use" element={<TermsOfUse />} />
                  <Route path="/retention" element={<Retention />} />
                </Routes>
              </Box>
            </Container>
          </Flex>
          <Footer />
        </Router>
      </Box>
    </Box>
  )
}

export default App

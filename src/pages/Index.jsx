import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaSify
          </Heading>
          <Text fontSize="lg" mb={6}>
            The ultimate solution for managing your business efficiently
          </Text>
          <HStack spacing={4} justify="center">
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
            <Button colorScheme="gray" size="lg">
              Learn More
            </Button>
          </HStack>
        </Box>

        {/* Features Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <IconButton aria-label="Fast Performance" icon={<FaRocket />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Fast Performance
              </Text>
              <Text textAlign="center">Experience blazing fast speeds with our optimized platform.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Reliable" icon={<FaCheckCircle />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Reliable
              </Text>
              <Text textAlign="center">Our system is built to be reliable and always available.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="User Friendly" icon={<FaUsers />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                User Friendly
              </Text>
              <Text textAlign="center">Easy to use interface for a seamless experience.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Analytics" icon={<FaChartLine />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Analytics
              </Text>
              <Text textAlign="center">Gain insights with our powerful analytics tools.</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Testimonials Section */}
        <Box bg="gray.100" p={10} borderRadius="md">
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            What Our Customers Say
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1474899420076-a61e74989430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDF8ZW58MHx8fHwxNzE2MDkyNjk3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 1" />
              <Text fontWeight="bold">John Doe</Text>
              <Text textAlign="center">"SaaSify has transformed the way we manage our business. Highly recommend!"</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDJ8ZW58MHx8fHwxNzE2MDkyNjk4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 2" />
              <Text fontWeight="bold">Jane Smith</Text>
              <Text textAlign="center">"The performance and reliability of SaaSify are unmatched."</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDN8ZW58MHx8fHwxNzE2MDkyNzAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 3" />
              <Text fontWeight="bold">Alice Johnson</Text>
              <Text textAlign="center">"Our team loves the user-friendly interface and powerful analytics."</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Join thousands of businesses using SaaSify to streamline their operations.
          </Text>
          <Button colorScheme="teal" size="lg">
            Sign Up Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

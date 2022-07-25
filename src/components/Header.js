import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button, Image } from '@chakra-ui/react';

function Header() {
    const {colorMode} = useColorMode();    
    const isDark = colorMode === 'dark';

    const[isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" /> 
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="4vh" fontWeight="bold">Hi, I am</Text>
                <Text fontSize="6vh" fontWeight="bold" bgGradient="linear(to-r, pink.400, blue.500, purple.600)" bgClip='text'>Pink Guy</Text>
                <Text  color={isDark? "gray.200" : "gray.500"} fontWeight="semiBold" fontSize="2vh" pr="4">I like Nickelodeon Gals, NTR, Japanese Wamans, Jews and Neggis. I like to bake hair cakes for our lord and savior Chin-Chin.</Text>
            <Button mt={8} colorScheme="pink" onClick={()=>
                window.open("https://facebook.com")
            }>Kill Me</Button>
            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0": "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius= 'full' backgroundColor= "transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/35682157?v=4" />
        </Flex>

       
    </Stack>
  );
}

export default Header;
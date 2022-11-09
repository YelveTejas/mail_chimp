import { Box, Button, FormControl, FormLabel, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {

  return (
    <div>
        
        <Box display='flex' w='100%'>
            <Box width='30%' height='full' marginTop='6cm'>
              <VStack spacing={5} width='90%' margin='auto'>
                <Heading>Login</Heading>
                <FormControl>
                    <FormLabel>Username or Email</FormLabel>
                    <Input

                    ></Input>
                    <FormLabel>Password</FormLabel>
                    <Input></Input>
                    <Button variant='ghost' marginTop='4' w='full'>Login </Button>
                 
                </FormControl>
                </VStack>
            </Box>
            <Box width='70%'height='full' border='black'>
                <Image src='https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg' alt='te'></Image>
            </Box>
        </Box>
    </div>
  )
}

export default Login
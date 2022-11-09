import { Avatar, Box, Button, ButtonGroup, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Flex minWidth='max-content' alignItems='center' gap='5' bg='white' width='90%' margin='auto'>
  <HStack p='5' spacing={10}>
    <Heading size='sm'>Products</Heading>
    <Heading size='sm'>Resources</Heading>
    <Heading size='sm'> Inspiration</Heading>
    <Heading size='sm'>Pricing</Heading>
  </HStack>
  <Spacer />
  <HStack spacing={10}>
    <HStack>
        <Avatar size='xs' src='https://cdn-icons-png.flaticon.com/128/900/900782.png'></Avatar>
        <Avatar size='xs' src='https://cdn-icons-png.flaticon.com/128/622/622669.png'></Avatar>
    </HStack>
  <ButtonGroup gap='2'>
    <Link to='/login'>
    <Button borderRadius='20px' borderColor='black' variant='outline' colorScheme='teal'>Login</Button>
     </Link>
    <Button borderRadius='20px' bg='yellow' borderColor='black' variant='outline' colorScheme='teal'>Sign Up</Button>
  </ButtonGroup>
  </HStack>
</Flex>
    </div>
  )
}

export default Navbar
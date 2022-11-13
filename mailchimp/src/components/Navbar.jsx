import { ChevronRightIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, ButtonGroup, Flex, Heading, HStack, Spacer, useDisclosure,Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 
    const {isOpen,onOpen,onClose} = useDisclosure()
    const btnref = useRef()
  
  return (
    <div>
    <Flex minWidth='max-content' alignItems='center' gap='5' bg='white' width='90%' margin='auto'>
  <HStack p='5' spacing={10}>
    <Button ref={btnref} onClick={onOpen} variant='ghost' w='2cm'>Products</Button>
    <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    finalFocusRef={btnref}
    size='md'
    >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton/>
         <DrawerBody w='12cm'>
          <Box w='7cm' margin='auto' mt='2cm'>
            <Text fontSize='md' textAlign='left' color='grey'>WE'LL HELP YOU</Text>
            <Text fontSize='lg'mt='10px' align='left' fontWeight='medium'>Get your Bussiness online  <ChevronRightIcon/></Text>
            <Text fontSize='lg'mt='10px' align='left' fontWeight='medium'>Market Your Business <ChevronRightIcon/></Text>
            <Divider/>

            <Text mt='1cm' fontSize='sm' color='grey'>PLATFORMS FEATURES</Text>
            <Text fontSize='lg'mt='10px' align='left' fontWeight='medium'>Audiance Management <ChevronRightIcon/></Text>
            <Text fontSize='lg' mt='10px'align='left' fontWeight='medium'>Creative Tools  <ChevronRightIcon/></Text>
            <Text fontSize='lg'mt='10px' align='left' fontWeight='medium'>Marketing Automation  <ChevronRightIcon/></Text>
            <Text fontSize='lg'mt='10px' align='left' fontWeight='medium'>Insights and Analytics  <ChevronRightIcon/></Text>
             <Divider/>
             <Text fontSize='sm'mt='1cm' color='grey'>NOT SURE WHERE TO START-</Text>
             <Text fontSize='lg' mt='10px' align='left' fontWeight='medium'>What's Right for Me?  <ChevronRightIcon/></Text>
              <Divider color='black'/>

              <Text mt='2cm' fontSize='lg' fontWeight='medium'>Talk to Sales:+1(800)1312-3212</Text>

              <Text fontSize='lg' mt='2cm' fontWeight='medium'>
                Product Updates
              </Text>
              <Text>Get the latest on new features, product improvements, and other announcements.</Text>
          </Box>
         </DrawerBody>
      
      </DrawerContent>

    </Drawer>
    <Button variant='ghost' size='md'>Resources</Button>
    <Button variant='ghost' size='md'>Inspiration</Button>
    <Button variant='ghost' size='md'>Pricing</Button>
   
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
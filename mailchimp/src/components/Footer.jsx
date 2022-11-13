import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Divider, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
          <Box w='full'display='flex'  h='15cm' backgroundColor='#E7B75F' mt='4cm' justifyContent='space-around'>
       
       <VStack mt='2cm'>
         <Text fontSize='2xl' fontWeight='medium'>Product</Text>
         <Text>Why</Text>
         <Text>MaiilChimp</Text>
         <Text>Product</Text>
         <Text>Updates</Text>
         <Text>Email</Text>
         <Text>Marketing</Text>
       </VStack>
       <VStack mt='2cm'>
         <Text fontSize='2xl' fontWeight='medium'>Resources</Text>
         <Text>Marketing</Text>
         <Text>Free Marketing</Text>
         <Text>Tools</Text>
         <Text>Marketing</Text>
         <Text>Glossary</Text>
         <Text>Inetegration</Text>
         <Text>Directory</Text>
       </VStack>
       <VStack mt='2cm'>
         <Text fontSize='2xl' fontWeight='medium'>Community</Text>
         <Text>Agencies & Freelancers</Text>
         <Text>Developers</Text>
         <Text>Events</Text>
        
       </VStack>
       <VStack mt='2cm'>
         <Text fontSize='2xl' fontWeight='medium'>Company</Text>
         <Text>Our Story</Text>
         <Text>News Rooms</Text>
         <Text>Annuals</Text>
         <Text>Report</Text>
         <Text>Careers</Text>
         <Text>Accessibility</Text>
      
       </VStack>
       <VStack mt='2cm'>
         <Text fontSize='2xl' fontWeight='medium'>Help</Text>
         <Text>Contact Us</Text>
         <Text>Hire an </Text>
         <Text>Expert</Text>
         <Text>Help</Text>
         <Text>Talk to</Text>
         <Text>Sales</Text>
       </VStack>
       <VStack mt='2cm'>
         <Image w='5cm' src='https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80' alt=''></Image>
         <Text w='4cm' fontSize='sm'> Films, podcasts, and original series that celebrate the entrepreneurial spirit.</Text>
         <Text >Check it out <ChevronRightIcon/></Text>
         <Divider></Divider>
         <Image mt='10px' w='4cm' src='https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80' alt=''></Image>
         <Text w='4cm' fontSize='sm'>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</Text>
         <Text>Learn More <ChevronRightIcon/></Text>
       </VStack>
     
   </Box>
  
    </div>
  )
}

export default Footer
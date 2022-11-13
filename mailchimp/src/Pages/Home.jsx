import { Box, Button,  Container, Divider, Grid, GridItem, Heading, Highlight, HStack, Image, Select, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import { CheckIcon,ChevronDownIcon, ChevronRightIcon, RepeatClockIcon } from '@chakra-ui/icons'
import '../styles/shadow.css'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
const [data,setData] = useState([])

useEffect(()=>{
  axios.get('http://localhost:3004/posts')
  .then((res)=>{
    setData(res.data)
    console.log(res.data)
  })
},[])

  return (
    <div>
    <Container marginTop='2cm' >
            <Box>
            <Heading fontSize='4xl' fontWeight='semibold'>Turn Emails into Revenue</Heading>
            </Box>
            <Box  borderColor='red' marginTop='0.5cm'>
            <Text fontSize='20px' width='100%'>Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</Text>
            </Box>

            <Button borderRadius='20px' mt='1cm' bg='yellow' borderColor='black' variant='solid'>Sing Up</Button>
    </Container>
  <Box w='full' display='flex' margin='auto' mt='30px' borderColor='black' height='19cm'>
     
    <Box className='shadow' w='25%' h='14cm'>
      <Link to='/plans'> 
      <Image src='https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80' alt=''></Image>
      </Link>
      <Box w='full' h='4cm' backgroundColor='yellow'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Send the right message at the right time to convert more customers.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
     
      </Box>

    </Box>
    <Box className='shadow' w='25%'>
      <Link to='/plans'>
    <Image src='https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80' alt=''></Image>
    </Link>
    <Box  w='full' h='4cm'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Get AI-assisted suggestions to help make your content more engaging.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
    <Box className='shadow' w='25%'>
      <Link to='/plans'>
    <Image src='https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80' alt=''></Image>
    </Link>
    <Box w='full' h='4cm' backgroundColor='orange.600'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Boost customer loyalty by predicting the right ones to target.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
    <Box className='shadow' w='25%'>
      <Link to='/plans'>
    <Image src='https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80' alt=''></Image>
    </Link>
    <Box  w='full' h='4cm'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Connect more tools, get more data, save time and make better decisions.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
  </Box>
  <Box w='full' h='22cm' bgColor='blackAlpha.900'>
    
     <Box pt='2cm' margin='auto' pl='3cm' height='17cm' width='80%' >
     <iframe width="90%" height='100%' src="https://www.youtube.com/embed/qMMY6vNUFW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </Box>
     <Box margin='auto' w='60%'>
     <Text  color='white' fontSize='25px' mt='1cm'>
     Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of emails we send to give you personalized recommendations for improving your content, targeting, and automations.
     </Text>
     </Box>  
  </Box>
   <Text fontSize='30px' mt='1cm' >Find the Right Plan for Me</Text>
      <HStack w='80%' margin='auto' h='13cm' spacing={20}>
        <VStack w='20%' align='left' className='shadow'>
          <Text fontWeight='bold' fontSize='25px'>Premium</Text>
          <Text align='left'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
          <Stat align='left'>
          <StatLabel >Stats at</StatLabel>
          <StatNumber>₹2000</StatNumber>
          <StatHelpText>/month base on 10,000 contacts</StatHelpText>
</Stat>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Max Contacts: Unlimited</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text align='left'>Custom-Coded and Pre-built Email Templates</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Multivariate and A/B Testing</Text>
          </HStack>
          <Divider/>
        </VStack>
        <VStack w='20%' align='left' className='shadow'>
        <Text fontWeight='bold' fontSize='25px'>Standard</Text>
          <Text align='left'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
          <Stat align='left'>
          <StatLabel >Stats at</StatLabel>
          <StatNumber>₹1500</StatNumber>
          <StatHelpText>/month base on 10,000 contacts</StatHelpText>
          </Stat>
          <HStack>
            <CheckIcon/>
              <Text>24/7 Email & Chat Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Max Contacts: 100,000</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>A/B Testing</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text align='left'>Enhanced Automated Customer Journeys</Text>
          </HStack>
          <Divider/>
        </VStack>
        <VStack w='20%' align='left' className='shadow'>
        <Text fontWeight='bold' fontSize='25px'>Essential</Text>
          <Text align='left'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
          <Stat align='left'>
          <StatLabel >Stats at</StatLabel>
          <StatNumber>₹1000</StatNumber>
          <StatHelpText>/month base on 10,000 contacts</StatHelpText>
          </Stat>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
        </VStack>
        <VStack w='20%' align='left' className='shadow'>
        <Text fontWeight='bold' fontSize='25px'>Free</Text>
          <Text align='left'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
          <Stat align='left'>
          <StatLabel >Stats at</StatLabel>
          <StatNumber>₹0</StatNumber>
          <StatHelpText>/month base on 10,000 contacts</StatHelpText>
          </Stat>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
          <HStack>
            <CheckIcon/>
              <Text>Phone & Priority Support</Text>
          </HStack>
          <Divider/>
        </VStack>
      </HStack>
       <Box w='full' h='17cm' display='flex'>
        <Box backgroundColor='yellow.400' h='full' w='50%' >
          <VStack w='80%' margin='auto' marginTop='4cm'>
            <Text fontWeight='normal' color='black' fontSize='4xl'>Keep customers ready to buy with engaging content</Text>
            <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Content Optimizer
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
           <Divider color='grey'/>
           <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Creative Assistant
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </VStack>
        </Box>
        <Box>
          <VStack w='15cm'  margin='auto' mt='2cm'>
        <Heading fontWeight='semibold'>Discover new ways to automate</Heading>
        <Text  fontSize='2xl' >Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.</Text>
        
         <Text mt='1cm' fontSize='2xl'>Learn More <ChevronRightIcon/></Text>
       
          </VStack>

          <VStack w='15cm' margin='auto' mt='2cm' >
        <Heading fontWeight='medium' fontSize='3xl'>Keep your emails relevant and your brand growing</Heading>
        <Text  fontSize='2xl' >Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.</Text>
        
         <Text mt='1cm' fontSize='2xl'>Learn More <ChevronRightIcon/></Text>
       
          </VStack>
        </Box>
       </Box>

       <Container maxW='lg' mt='2cm'>
        <Text fontSize='30px' align='center'>Get up to 88% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments</Text>
       </Container>
       <Box w='12cm' marginRight='4cm'>
        <Text fontSize='30px'>Bring in more data, drive more growth with our integrations</Text>
       </Box>
       <Grid
      templateColumns={{lg:'repeat(3,1fr)',md:'repeat(2,1fr)',sm:'repeat(1,1fr)'}}
      h='10cm'
      width='80%'
      margin='auto'
      gap={5}
      mt='2cm'
       >
        {
          data.map((e)=>(
            <GridItem key={e.id}>
                  <Link to={`/media/${e.id}`}>
                  <HStack >
               
                    <Image h='2.5cm' w='2.5cm'  src={e.img} alt={e.title}></Image>
                    <VStack>
                      <Text align='left' fontSize='lg' fontWeight='medium'>{e.title}</Text>
                      <Text fontSize='sm'>{e.des}</Text>
                    </VStack>
                  </HStack>
                  </Link>
                 </GridItem>
          ))
        }

      </Grid>
      <Footer/>

    </div>

  )
}

export default Home


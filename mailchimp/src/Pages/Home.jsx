import { Box, Button,  Container, Divider, Heading, HStack, Image, Select, Stat, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import React from 'react'

const Home = () => {
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
  <Box  w='full' display='flex' margin='auto' mt='30px' borderColor='black' height='19cm'>
    <Box w='25%' h='14cm'>
      <Image src='https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80' alt=''></Image>
      <Box w='full' h='4cm' backgroundColor='yellow'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Send the right message at the right time to convert more customers.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
    <Box w='25%'>
    <Image src='https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80' alt=''></Image>
    <Box w='full' h='4cm'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Send the right message at the right time to convert more customers.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
    <Box w='25%'>
    <Image src='https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80' alt=''></Image>
    <Box w='full' h='4cm' backgroundColor='orange.600'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Send the right message at the right time to convert more customers.</Text>
      <Button mt='20px' borderRadius='20px' variant='outline' borderColor='black'>Learn More</Button>
      </Box>
    </Box>
    <Box w='25%'>
    <Image src='https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80' alt=''></Image>
    <Box w='full' h='4cm'>
      <Text pr='10px' pl='10px' pt='1cm' fontSize='md' align='left'>Send the right message at the right time to convert more customers.</Text>
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
        <VStack w='20%' align='left'>
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
        <VStack w='20%' align='left'>
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
        <VStack w='20%'>
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
        <VStack w='20%'>
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
           
          </VStack>
        </Box>
        <Box></Box>
       </Box>



    </div>

  )
}

export default Home


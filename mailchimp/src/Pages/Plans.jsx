import { CheckIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, Heading, HStack, Image, Input, Select, Table, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
import Footer from '../components/Footer'

const Plans = () => {
  return (
    <div>
        <HStack margin='auto' justifyContent='space-around' h='1cm'  mt='1cm'>
            <Box border='1px' h='full'w='33%' alignItems='center' >
                <Text>Marketing Platforms</Text>
            </Box>
            <Box border='1px' h='full' w='33%' >
                <Text>Websites & Commerece</Text>
            </Box>
            <Box border='1px' h='full' w='33%'>
                <Text>Trasational Email</Text>
            </Box>
        </HStack>
        <Container>
            <Box display='flex' w='16cm' mt='1cm'>
              <Box w='13cm' bg='gray.100' h='1cm' alignContent='center'>
                <Text>How Many Contacts Do You Have ?</Text>
              </Box>
             <Select icon={<ChevronDownIcon/>} w='30%'>
                <option value="">1,500</option>
                <option value="">2,000</option>
                <option value="">10,000</option>
                <option value="">15,000</option>
                <option value="">2,00,000</option>
                <option value="">2,50,000</option>
             </Select>
            </Box>
        </Container>
        <Box w='70%' ml='9cm'h='10cm' border='1px' mt='1cm' display='flex'>
            <VStack w='25%' border='1px' h='full' spacing={5}>
                <Text fontSize='2xl' fontWeight='medium'>Premium</Text>
                <Text align='left' pl='15px'>Our most advanced tools, unlimited contacts, and priority support; built for teams.</Text>
                <Box>
                <Stat alignContent='left' >
                <StatLabel>Starts at,</StatLabel>
                <StatNumber>$ 279</StatNumber>
                <StatHelpText>/Month</StatHelpText>
                </Stat>
                </Box>
                <Button bg='yelloW' border='black'borderRadius='20px' >Buy Now</Button>
            </VStack>
            <VStack w='25%' border='1px' h='full' spacing={5}>
                <Text fontSize='2xl' fontWeight='medium'>Standard</Text>
                <Text align='left' pl='15px'>Sell even more with personalization, optimization tools, and enhanced automations.</Text>
                <Box>
                <Stat alignContent='left' >
                <StatLabel>Starts at,</StatLabel>
                <StatNumber>$ 400</StatNumber>
                <StatHelpText>/Month</StatHelpText>
                </Stat>
                </Box>
                <Button bg='yelloW' border='black'borderRadius='20px' >Buy Now</Button>
            </VStack>
            <VStack w='25%' border='1px' h='full' spacing={5}>
                <Text fontSize='2xl' fontWeight='medium'>Essential</Text>
                <Text align='left' pl='15px'>Send the right content at the right time with testing and scheduling features.</Text>
                <Box>
                <Stat alignContent='left' >
                <StatLabel>Starts at,</StatLabel>
                <StatNumber>$ 279</StatNumber>
                <StatHelpText>/Month</StatHelpText>
                </Stat>
                </Box>
                <Button bg='yelloW' border='black'borderRadius='20px' >Buy Now</Button>
            </VStack>
            <VStack w='25%' border='1px' h='full' spacing={5}>
                <Text fontSize='2xl' fontWeight='medium'> Free</Text>
                <Text align='left' pl='15px'>Easily create email campaigns and learn more about your customers and some additional features.</Text>
                <Box>
                <Stat alignContent='left' >
                <StatLabel>Starts at,</StatLabel>
                <StatNumber>$ 279</StatNumber>
                <StatHelpText>/Month</StatHelpText>
                </Stat>
                </Box>
                <Button bg='yelloW' border='black'borderRadius='20px' >Buy Now</Button>
            </VStack> 
        </Box>
        <Table variant='striped' colorScheme='gray'  w='90%' ml='4cm'>
            <Tbody>
                <Tr>
                   <Td>Monthly Email Sends</Td>
                   <Td w='20%'>15,000</Td>
                   <Td w='20%'>50,000</Td>
                   <Td w='20%'>100,000</Td>
                   <Td w='20%'>-Limit-</Td>
                </Tr>
                <Tr>
                   <Td>Users</Td>
                   <Td w='20%'>15,000</Td>
                   <Td w='20%'>50,000</Td>
                   <Td w='20%'>100,000</Td>
                   <Td w='20%'>-Limit-</Td>
                </Tr>
                <Tr>
                   <Td>Customer Support</Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'>-Limit-</Td>
                </Tr>
                <Tr>
                   <Td>Pre-Build Emails</Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CloseIcon/></Td>
                </Tr>
                <Tr>
                   <Td>300+ Integrations</Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CloseIcon/></Td>
                </Tr>
                <Tr>
                   <Td>Basic Supporting</Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'>-Limit-</Td>
                </Tr>
                <Tr>
                   <Td>Forms & Landing Page</Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                   <Td w='20%'><CheckIcon/></Td>
                </Tr>
            </Tbody>
            </Table>
            <Box w='80%' margin='auto'h='10cm' display='flex' mt='2cm'>
                <VStack w='50%' spacing={5}>
                    <Heading fontWeight='thin' pr='10px'>Also included: Free tools for getting your business online</Heading>
                    <Text align='left' fontSize='20px'>All Marketing plans come with Free website and commerce features, so you can build your dream online presence. But if you want more advanced tools for selling and scheduling, try combining your Marketing plan with a paid Websites & Commerce plan.</Text>
                    <Button w='7cm' variant='outline'borderRadius='20px' borderColor='black'>See Websites & Commerce Plans</Button>
                </VStack>
                <Divider orientation='vertical' variant='dashed'/>
                <VStack w='50%' spacing={5}>
                    <Heading fontWeight='thin' pr='10px'>Prefer to pay as you go ?</Heading>
                    <Text align='left'pl='1cm' fontSize='20px'>Instead of paying a monthly recurring charge, you can buy email credits as needed through our Pay As You Go plan. It's best for infrequent senders.</Text>
                    <Button w='7cm' variant='outline' borderRadius='20px' borderColor='black'>Learn More</Button>
                </VStack>
            </Box>

            <Box w='80%' margin='auto'h='10cm' display='flex' mt='2cm'>
                <VStack w='50%' spacing={5}>
                    <Heading fontWeight='thin' pr='10px'>Two-Factor Authentication</Heading>
                    <Text align='left' fontSize='20px'>At Mailchimp, we’re serious about security. We offer a 10% discount for 1 month when you add two-factor authentication to your Mailchimp account with an app like Google Authenticator or SMS two-factor authentication.</Text>
                    <Button w='7cm' variant='outline'borderRadius='20px' borderColor='black'>Get Started</Button>
                </VStack>
                <Divider orientation='vertical'  size='1px' color='black'/>
                <VStack w='50%' spacing={5}>
                    <Heading fontWeight='thin' pr='10px'>Rates for nonprofits and charities</Heading>
                    <Text align='left'pl='1cm' fontSize='20px'>Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.</Text>
                    <Button w='7cm' variant='outline' borderRadius='20px' borderColor='black'>Get Started</Button>
                </VStack>
            </Box>

            <Container>
                <Heading fontSize='3xl'fontWeight='medium'>You Will be in a good Company</Heading>
            </Container>
            <Box w='80%' display='flex' ml='7cm' justifyContent='space-between' >
                <Box w='33%'  mt='2cm'>
              <Image w='4cm' h='20px' src='https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=260&fm=webp&q=70' alt=''></Image>
              </Box>
              <Box w='33%' mt='2cm'>
              <Image w='3cm' mt='-1cm'h='90px' src='https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=260&fm=webp&q=70' alt=''></Image>
              </Box>
              <Box w='33%' mt='2cm'>
              <Image w='4cm' h='30px' src='https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=260&fm=webp&q=70' alt=''></Image>
              </Box>
            </Box>
           <Footer/>
    </div>
  )
}

export default Plans
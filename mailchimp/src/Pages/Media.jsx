import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/media.css'

const getdata=(id)=>{
    return fetch(`http://localhost:3004/posts/${id}`)
    .then((res)=>res.json())  
}

const Media = () => {
    const {id} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
    getdata(id).then((res)=>{
        setData(res)
        console.log(res)
    })
      
    },[id])

  
  return (
    <div>
        <Box w='full'h='12cm'  bg='gray.100'>
        <Box w='70%' display='flex' margin='auto' mt='2cm'>
                <VStack w='80%' align='left' spacing={7}>
                 <Heading textAlign='left'>{data.title}</Heading>
                <Text fontSize='25px'align='left'  pr='8cm'>{data.des}</Text>

                <Button bg='yellow' w='4cm' borderRadius='3xl'>Check Now</Button>
                <HStack mt='2cm' spacing={10}>
                    <VStack>
                        <Text fontWeight='thin' fontSize='2sm'>Cost</Text>
                        <Text>Free</Text>
                    </VStack>
                    <VStack >
                        <Text fontWeight='thin' fontSize='2sm'>Last Updates</Text>
                        <Text>12 Dec,2022</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight='thin' fontSize='2sm'>DEVELOPER</Text>
                        <Text>MailChimp</Text>
                    </VStack>
                    <VStack>
                        <Text fontWeight='thin' fontSize='2sm'>LANGUAGE</Text>
                        <Text>ENGLISH</Text>
                    </VStack>
                </HStack>
                </VStack>
                <VStack mt='2cm'>
                 <Image w='6cm' h='6cm' src={data.img} alt={data.title}/>
                </VStack>
        </Box>
        </Box>
       <Box w='15cm' mt='1cm' ml='2cm'>
                <Text fontSize='3xl' align='left' fontWeight='medium'>About</Text>
                <Text fontSize='2xl' align='left'>{data.about}</Text>
       </Box>
     <Footer/>
    </div>
  )
}

export default Media
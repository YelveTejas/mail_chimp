import { Alert, Box, Button, FormControl, FormLabel, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Apicontext } from '../components/AuthContext.jsx/Auth'
import { loading, login_fail, login_success } from '../components/AuthContext.jsx/actions'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const {state,dispatch} = useContext(Apicontext)
  const [login,setlogin]= useState({
    email:'',
    password:''
  })

  const handlechange=(e)=>{
    const{name,value} = e.target;
    setlogin({...login,[name]:value})
  }

  const submit=()=>{
    dispatch(loading())
    axios.post(`https://reqres.in/api/login`,{
        email:login.email,
        password:login.password
    })
    .then((res)=>
    dispatch(login_success(res.data.token))
    )
    .catch((err)=>{
        dispatch(login_fail())
        alert('Something Went wrong')
    })
  }

  if(state.isauth){
    return <>
      <Navigate to='/'/>
    </>
  }
  return (
    <div>
        
        <Box display='flex' w='100%'>
            <Box width='30%' height='full' marginTop='9cm'>
              <VStack spacing={5} width='90%' margin='auto'>
                <Heading>Login</Heading>
                <FormControl>
                    <FormLabel>Username or Email</FormLabel>
                    <Input
                      name='email'
                      type='Email'
                      value={login.email}
                      onChange={handlechange}
                    ></Input>
                    <FormLabel>Password</FormLabel>
                    <Input
                    name='password'
                    type='Password'
                    onChange={handlechange}
                    valur={login.password}
                    ></Input>
                    <Button isLoading={state.loading} onClick={submit}  marginTop='4' w='full'>Login </Button>
                 
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
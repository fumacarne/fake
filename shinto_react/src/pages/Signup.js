import React from 'react';
import {Box, Button, Card, Flex, Input, Label, Styled} from 'theme-ui';
import {useFormik} from 'formik';
import { useAuth } from '../contexts/auth.context';

function Signup (){
    const {user:currentUser, signup} = useAuth();
    const formik = useFormik({      
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit: ({email,password}) =>{
            
            signup({email, password});
            // // console.log(
            // //     `[DEBUG] form values :: ${JSON.stringify(values,null,2)}`
            
            // );
        },
    });

    return (
        <Flex
        as="main"
        sx={{
            minHeight:'80vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems:'center',
            flexDirection:'column',

        }}
        >
        <Card px="75px" py="100px">
        <Flex sx={{flexDirection:'column',}}>
    

    <Styled.h1>SIGNUP</Styled.h1>
    <Box as="form" onSubmit={formik.handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
       
        value={formik.values.email}
        mb="15px"
        />
        <Label htmlFor="password">PASSWORD</Label>
        <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.onBlur}
        
        value={formik.values.password}
        mb='30px'
        />
        <Button type="submit" sx={{width:'100%', bg:'secondary'}}>
            Sign up
        </Button>
    </Box>
    </Flex>
    </Card>
    </Flex>


    );
}


export default Signup
import React from "react";
import {Flex, Styled} from 'theme-ui';
import Carrousel from "../components/Carrousel";
import Ball from "../components/Ball";
import Planet from "../components/Planet";

// import Logo from "../components/Logo"
function Home(){
    return(
        
        
        <Flex
        as="main"
        sx={{
            
            minHeight: '80vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: '5px',

        }}
        >
            
            <Carrousel/>
            <br></br>
            <Planet/>
             
            <Ball/>
            
        </Flex>
        
        
    );
}

export default Home 
import React from "react";
import {Flex, Styled} from 'theme-ui';
import Carrousel from "../components/Carrousel"
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
            flexDirection: 'column'

        }}
        >
            <Styled.h2>KAMVAS</Styled.h2>
            <Carrousel/>
            
        </Flex>
    );
}

export default Home 
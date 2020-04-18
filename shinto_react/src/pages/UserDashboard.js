import React, {useEffect, useState} from 'react';
import {Card, Flex, Styled} from 'theme-ui';
import P5Canvas from '../components/P5Canvas'

import apiClient from "../utils/api-client";

function Home(){
    const [UserLists,setUserList]= useState([]);
    useEffect(()=>{
        const fetchUserList = async ()=>{

    const lists= await apiClient.lists.getAll();
    setUserList(lists);

        };
        fetchUserList();
    }, []);
    return(
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
            <Styled.h2>KAMI NO MICHI</Styled.h2>
            <ul>
                {UserLists.map((list)=>(

                    <Card>
                        <pre>{JSON.stringify(list,null,2)}</pre>
                    </Card>

                ))}
            </ul>
            <P5Canvas/>
        </Flex>
    );
}

export default Home 
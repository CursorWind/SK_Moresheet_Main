import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next';

import { useTranslation } from "next-i18next";
// SK Components
import {
  ContentLayout,
  Section,
  Header,
  MaterialIcon,
  TextField,
  TextFieldProps,
  Button,
} from "@suankularb-components/react";


import React, { useState,FormEvent,ChangeEvent } from 'react';
import Tdline from '../../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";


const IndexPage: NextPage = () => {
    const [email,setEmail] = useState('')
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {email}
        
        const response = fetch('/api/setAdder',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        console.log(form)
    }

    return (
        <>
        
        <ContentLayout>
        <Section>
            <Header>Register</Header>
            <Tdline />
            <div className='left-3'>
            [number] Individuals Have signed up. Button will come soon (will make it techdev style)
          </div>
          </Section>
          <Section className='left-3'>
            <form onSubmit={handleSubmit}>
          <input
          type='text'
            className='w-96 h-12 pl-4'
            style={{zIndex:20}}
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value as string)
            }
            
        /> <br/> <br/>


        <div className="w-96 left-3" style={{zIndex:20}}>
          <button className='w-96'
    type='submit'
  ><Button
    appearance="filled"
    icon={<MaterialIcon icon="login" />}
    tooltip="Join us or else"
    >
    Join us
  </Button>
  </button>
       </div>  </form>
  </Section>
        </ContentLayout>
      
      
      
      </>
    );
  };



export default IndexPage;
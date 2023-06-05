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

import TDtext from '../../components/TDtitle';

import React, { useState } from 'react';
import Tdline from '../../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";

// Define the argument value
const argValue = 'Example Argument';

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
            Individuals Have signed up
          </div>
          </Section>
          <Section className='left-3'>
            <form onSubmit={handleSubmit}>
          <TextField
            className='w-96'
            appearance='outlined'
            label="Email"
            leading={<MaterialIcon icon="person" />}
            helperMsg="Please enter your school mail"
            style={{zIndex:20}}
            value={email}
            onChange={setEmail}
            
        /> <br/>


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
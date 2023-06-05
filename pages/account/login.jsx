import Head from 'next/head'
import Image from 'next/image'


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

import React from 'react';
import Tdline from '../../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";


import fetch from 'isomorphic-fetch';

// Define the argument value
const argValue = 'Example Argument';



export default function Home({sheetdata}) {
    const { t } = useTranslation(["home", "common"]);
  return (<>
        
      <ContentLayout>
      <Section>
          <Header>Log In</Header>
          <Tdline />
          <div className='left-3'>
          {sheetdata.length} Individuals Have signed up
        </div>
        </Section>
        <Section className='left-3'>
        <TextField
        className='w-96'
      appearance='outlined'
  label="Email"
  leading={<MaterialIcon icon="person" />}
  helperMsg="Please enter your school mail"
  style={{zIndex:20}}
      /> <br/>
      <div className="w-96 left-3" style={{zIndex:20}}>
    <Button
  appearance="filled"
  icon={<MaterialIcon icon="login" />}
  tooltip="Join us or else"
  href="/en-US/account/login"
>
  Join us
</Button> </div>
</Section>
      </ContentLayout>
    
    
    
    </>
  )
}

export async function getServerSideProps() {
  const req = await fetch('http://localhost:3000/api/sheet');
  const res = await req.json();

  return {
    props: {
      sheetdata: res.data
    }
  }
}
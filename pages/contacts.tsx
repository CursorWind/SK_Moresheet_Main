// External libraries
import Image from "next/image";
import Head from "next/head";
import type { NextPage } from 'next';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
import Tdline from '../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";

// Function to check if it's a mobile device
function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < window.innerHeight;;
}

// Page

const IndexPage: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);
  const isMobile = isMobileDevice();

  const [email,setEmail] = useState('')
  const [fullName,setFullName] = useState('')
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {email, fullName}
        
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
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>{t("contactsPage.title")}</Header>
          <Tdline />
          
              <p className='skc-display-small'>{t("contactsPage.Head1")}</p> 
            <p >{t("contactsPage.ctx1")}</p>

            <form onSubmit={handleSubmit}>
              <label className="text-gray-400">
                Email
              </label> <br />
          <input
          type='text'
            className='w-96 h-12 pl-4'
            style={{zIndex:20}}
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value as string)
            }
        /> <br/> <br/><label className="text-gray-400">
        Name
      </label> <br />
  <input
  type='text'
    className='w-96 h-12 pl-4'
    style={{zIndex:20}}
    value={fullName}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      setFullName(event.target.value as string)
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

            <p className='skc-display-small'>{t("contactsPage.Head2")}</p> 
            <p >{t("contactsPage.ctx2")}</p>

            <p className='skc-display-small'>{t("contactsPage.Head3")}</p> 
            <p >{t("contactsPage.ctx3")}</p>
        </Section>
        

        
      </ContentLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: LangCode }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default IndexPage;


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
import Tdline from '../../components/tdline'
// Types
import { CustomPage, LangCode } from "@/utils/types";

// Function to check if it's a mobile device


// Page

const IndexPage: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);
  function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < window.innerHeight;;
}
  const isMobile = isMobileDevice();

  const [TeamName,setTN] = useState('')
  const [Password,setPW] = useState('')
  const [School,updateSCH] = useState('')
  const [classN,setclassN] = useState('')
  
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {TeamName,Password,School,classN}
        
        const response = fetch('/api/setAdder',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        console.log(form)
        if(classN != ''){window.open("https://discord.gg/3tS5VNW")}
        
    }

  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>{t("contactsPage.title")}</Header>
          <Tdline />
          
              <p className='skc-display-small'>{t("contactsPage.Head1")}</p> 
            <p >{t("contactsPage.ctx1")}</p>

            <form onSubmit={handleSubmit} className="inline"><div className="top-0 w-96 inline-grid">
              <label className="text-gray-400">
                TeamName
              </label>
          <input
          type='text'
            className='w-80 h-12 pl-4'
            style={{zIndex:20}}
            value={TeamName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTN(event.target.value as string)
            }
        /> 
<br/>
<label className="text-gray-400">
                School
              </label>
          <input
          type='text'
            className='w-80 h-12 pl-4'
            style={{zIndex:20}}
            value={School}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateSCH(event.target.value as string)
            }
        /> <br/>
        </div>
        
        
        <div className="w-96 inline-grid top-0"> <label className="text-gray-400">
        Team Account Password
      </label>
  <input
  type='text'
    className='w-80 h-12 pl-4'
    style={{zIndex:20}}
    value={Password}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      setPW(event.target.value as string)
    }
/> <br/> <label className="text-gray-400">
        Discord (optional)
      </label>
  <input
  type='text'
    className='w-80 h-12 pl-4'
    style={{zIndex:20}}
    value={classN}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      setclassN(event.target.value as string)
    }
/></div><br/> <br/>
 


        <div className="w-20 left-3" style={{zIndex:20}}>
          <button className='w-20 h-10 rounded-full bg-sky-300 text-black'
    type='submit'
  > <p className="inline-block align-top FireTopic"><MaterialIcon icon="charger"/></p>
  </button>
       </div>  </form> <br/>

            <p className='skc-display-small'>{t("contactsPage.Head2")}</p> 
            <p >{t("contactsPage.ctx2")}</p>

          {isMobile ? (
              <div className="block">
              <a href="https://www.instagram.com/sktechdev/" target="_blank"  className="grid rounded-l-lg w-2/4 border-2 h-16 border-neutral-500 p-3 border-r-0"> <p> @SKTechDev </p> <p className="text-gray-400 text-sm"> Instagram </p> </a>
              <img src="/images/home/media.png" className="rounded-r-lg h-16 border-neutral-500 relative border-2 cursor-pointer left-2/4 bottom-16 w-16"/>
              <a href="https://discord.gg/3tS5VNW" target="_blank"  className="grid rounded-l-lg w-2/4 border-2 h-16 border-neutral-500 p-3 border-r-0">@SK TechDev <p className="text-gray-400 text-sm"> Discord </p> </a>
              <img src="/images/home/media3.png" className="rounded-r-lg h-16 border-neutral-500 relative border-2 cursor-pointer left-2/4 bottom-16 w-16"/>
              <a href="https://www.youtube.com/@sktechdev" target="_blank" className="grid rounded-l-lg w-2/4 border-2 h-16 border-neutral-500 p-3 border-r-0">SKTechDev Club <p className="text-gray-400 text-sm"> Youtube </p> </a>
              <img src="/images/home/media2.png" className="rounded-r-lg h-16 border-neutral-500 relative border-2 cursor-pointer left-2/4 bottom-16 w-16" />

            </div>
            ):(
              <div className="flex w-full">
            <a href="https://www.instagram.com/sktechdev/" target="_blank"  className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3"> <p> @SKTechDev </p> <p className="text-gray-400 text-sm"> Instagram </p> </a>
            <img src="/images/home/media.png" className="rounded-md h-16 border-neutral-500 relative border-2 cursor-pointer" style={{left:'-64px'}}/>
            <a href="https://discord.gg/3tS5VNW" target="_blank"  className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3">@SK TechDev <p className="text-gray-400 text-sm"> Discord </p> </a>
            <img src="/images/home/media3.png" className="rounded-md h-16 border-neutral-500 relative border-2 cursor-pointer" style={{left:'-64px'}}/>
            <a href="https://www.youtube.com/@sktechdev" target="_blank" className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3">SKTechDev Club <p className="text-gray-400 text-sm"> Youtube </p> </a>
            <img src="/images/home/media2.png" className="rounded-md h-16 border-neutral-500 relative border-2 cursor-pointer" style={{left:'-64px'}}/>
            
          </div>
            )}

            <p className='skc-display-small relative'>{t("contactsPage.Head3")}</p> 
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


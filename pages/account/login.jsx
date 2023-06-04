import Head from 'next/head'
import Image from 'next/image'

import { useTranslation } from "next-i18next";
// SK Components
import {
  ContentLayout,
  Section,
  Header,
  MaterialIcon,
} from "@suankularb-components/react";

import TDtext from '../../components/TDtitle';

import React from 'react';
import Tdline from '../../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";




export default function Home({sheetdata}) {
    const { t } = useTranslation(["home", "common"]);
  return (<>
        
      <ContentLayout>
      <Section>
          <Header>Log In</Header>
          <Tdline />
        </Section>
        <div>
          {sheetdata.length} Individuals Have signed up
        </div>
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
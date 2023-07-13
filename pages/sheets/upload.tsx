// External libraries
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  ContentLayout,
  Header,
  Section,
  Button,
  MaterialIcon,
  TextField,
  Columns,
  Select, 
  MenuItem,
  ChipField,
  ChipSet,
  InputChip,
} from "@suankularb-components/react";

import React, { useState,FormEvent,ChangeEvent } from 'react';
import HeaderLine from "@/components/Extras/layouts/Lines";

// Types
import { CustomPage, LangCode } from "@/utils/types";

// Function to check if it's a mobile device
function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < window.innerHeight;;
}

// Page
const IndexPage: CustomPage = () => {
  const { t } = useTranslation(["home", "common"]);
  const isMobile = isMobileDevice();
  
  const AttributeSelected = ['w','5'];


  const [Attributes,setAT] = useState('')
  const [Subject,cS] = useState('')
  const [Name,NameCX] = useState('')

  const handleSubmit = async () => {
   //
    
}

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>SK MoreSheet | Upload page</Header>
          <HeaderLine/>
          <p className="skc-body-medium">This text you are seeing here indicates either 1 - @squarecube is lazy af please go wake him 2 - This webpage is forgotten pls contact tonmai lmao. Currently, i am a placeholder and not functional. if you think this is a mistake, contact discord SquareCube or IG Cursorwind. Thanks. For now, enjoy reading whatever this leads you. glhf with life. </p>
        </Section>
        <Section>

        <Columns columns={3} className="my-3 !gap-y-12"> 
        <div>
         <TextField<string>
        appearance="outlined"
        label={t("Uploading.Name")}
        align="left"

        value={Name}
        onChange={(value) => NameCX(value)}
        inputAttr={{
          autoCapitalize: "on",
          spellCheck: false,
          onKeyUp: (event) => event.key === "Enter" && handleSubmit(),
        }}  /> 
        <br/>
        <TextField<string>
        appearance="outlined"
        label={t("Uploading.Subject")}
        align="left"

        value={Subject}
        onChange={(value) => cS(value)}
        inputAttr={{
          autoCapitalize: "on",
          spellCheck: false,
          onKeyUp: (event) => event.key === "Enter" && handleSubmit(),
        }}  /> 
        </div>

        <div>
         
        </div>
        </Columns>
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


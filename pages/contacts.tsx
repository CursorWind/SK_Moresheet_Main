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
} from "@suankularb-components/react";

import React from 'react';
import Tdline from '../components/tdline';

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


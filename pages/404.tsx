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
  MaterialIcon
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
          <Header>{t("404.title")}</Header>
          <Tdline />
          <p className="skc-body-medium">{t("404.ctx")}</p>
        </Section>
        
        
        <Section>
        
        <Button className="w-2/4" 
  appearance="filled"
  icon={<MaterialIcon icon="home" />}
  tooltip="Back to index"
  href="/"
>
  Alright. Imma head out
</Button><Button className="w-1/4"
  appearance="outlined"
  icon={<MaterialIcon icon="image" />}
  tooltip="Just, dont"
>
  Stay in the void
</Button>

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
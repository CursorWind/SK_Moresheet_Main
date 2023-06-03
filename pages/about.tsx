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
          <Header>{t("aboutPage.title")}</Header>
          <Tdline />
          <p className="skc-body-medium">{t("unfinished.ctx")}</p>
        </Section>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {isMobile ? (
            <div style={{ flex: '0 0 100%', marginBottom: '20px' }}>
              <Image
                src="/images/home/Frame 43.png"
                alt=""
                layout="responsive"
                width={400}
                height={500}
                className="w-full sm:rounded-lg"
              />
            </div>
          ) : (
            <div style={{ flex: '0 0 15vw', marginRight: '20px' }}>
              <Image
                src="/images/home/Frame 43.png"
                alt=""
                layout="responsive"
                width={400}
                height={500}
                className="w-full sm:rounded-lg"
              />
            </div>
          )}

          {isMobile ? (<center>
            <div style={{ flex: '0 0 90vw' }}>
              <p className='skc-display-small'>Our Vision</p> 
            <p>{t("unfinished.ctx")}</p>
</div> </center>
          ) : (
            <div style={{ flex: '0 0 56vw' }}>
              <p className='skc-display-small'>Our Vision</p> 
            <p>{t("unfinished.ctx")}</p>
            </div>
          )}

          
          
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {isMobile ? (<center>
            <div style={{ flex: '0 0 90vw' }}>
              <p className='skc-display-small'>Meet the Committee</p> 
            <p>{t("unfinished.ctx")}</p>
</div> </center>
          ) : (
            <div style={{ flex: '0 0 32vw' }}>
              <p className='skc-display-small'>Meet the Committee</p> 
            <p>{t("unfinished.shortCtx")}</p>
            </div>
          )}
        </div>
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
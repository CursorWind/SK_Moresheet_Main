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
          <Header>{t("aboutPage.title")}</Header>
          <Tdline />
          <p className="skc-body-medium">{t("aboutPage.ctx1")}</p>
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
              <p className='skc-display-small'>{t("aboutPage.Head2")}</p> 
            <p>{t("aboutPage.ctx2")}</p> <br/>
            <div className="w-1/2 block">
            <Button 
  appearance="filled"
  icon={<MaterialIcon icon="login" />}
  tooltip="Join us or else"
  href="/en-US/contacts"
>
  Join us
</Button></div>
</div> </center>
          ) : (
            <div style={{ flex: '0 0 56vw'}} className="inline"> 
              <p className='skc-display-small'>{t("aboutPage.Head2")}</p> 
            <p>{t("aboutPage.ctx2")}</p>
            <br/>
            <div className="w-1/4 block">
            <Button 
  appearance="filled"
  icon={<MaterialIcon icon="login" />}
  tooltip="Join us or else"
  href="/en-US/contacts"
>
  Join us
</Button></div>
            </div>
          )}


          
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {isMobile ? (<center>
          
<Image
                src="/images/home/replacePic1.png"
                alt=""
                layout="responsive"
                width={400}
                height={500}
                className="w-full sm:rounded-lg"
              /><br/>
            <div style={{ flex: '0 0 90vw' }}>
              <p className='skc-display-small'>{t("aboutPage.Head2")}</p> 
            <p>{t("aboutPage.ctx2")}</p>
</div> 


</center>
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


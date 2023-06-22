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
import Tdline from '../../components/tdline';

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
        <title>SKTD Gallery</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>Gallery</Header>
          <Tdline />
          <p className="skc-title-large">{t("gallery.ctx1")}</p>
        </Section>
        


        
  {isMobile ? (<center>
    <div className="grid skc-title-large">
<p className="inline"> June 19th <p className="inline skc-title-medium text-gray-400"> Activity day</p></p>
</div>
  <Image
                src="/images/home/activityDay/colVertical.jpg"
                alt=""
                width={200}
                height={240}
                className="w-5/6 sm:rounded-lg border"
              />

    <div className="flex w-full p-4">
  <Button className="w-1/2 inline-block"
  appearance="filled"
  icon={<MaterialIcon icon="photo_library" />}
  tooltip="Your generated images"
  href="/en-US/gallery/ActivityDay"
>
  Community images
  
</Button> <span className="w-3"></span>
  <Button className="w-1/2 inline-block"
  appearance="outlined"
  icon={<MaterialIcon icon="groups" />}
  tooltip="Video"
  href="/en-US/gallery/ActivityDayStaff"
>
  Staff images
  
</Button>

</div>
            </center>
          ) : (
            <Section className="flex flex-col items-start gap-12 self-stretch w-full h-96"> 
<div className="flex w-full">
  <div className="w-5/12 p-3">
    <div className="grid skc-title-large">
<p className="inline"> June 19th <p className="inline skc-title-medium text-gray-400"> Activity day</p></p> <br/>

<div className="flex w-full">
  <Button className="w-1/2 inline-block"
  appearance="filled"
  icon={<MaterialIcon icon="photo_library" />}
  tooltip="Your generated images"
  href="/en-US/gallery/ActivityDay"
>
  Community images
  
</Button> <span className="w-3"></span>
  <Button className="w-1/2 inline-block"
  appearance="outlined"
  icon={<MaterialIcon icon="groups" />}
  tooltip="Video"
  href="/en-US/gallery/ActivityDayStaff"
>
  Staff images
  
</Button>

</div>
  </div>

  </div>
  <div className="w-1/3 p-3">
  <div className="grid">
  <Image
                src="/images/home/activityDay/colVertical.jpg"
                alt=""
                width={400}
                height={500}
                className="h-full sm:rounded-lg"
              />
              
  </div>


  </div>
  <div className="w-1/3 p-4">
  <div className="grid">
  <Image
                src="/images/home/activityDay/col2.jpg"
                alt=""
                width={400}
                height={500}
                className="w-full sm:rounded-lg"
              />
              <br/>
              <Image
                src="/images/home/activityDay/col3.jpg"
                alt=""
                width={400}
                height={500}
                className="w-full sm:rounded-lg"
              />
              
  </div>
  </div>
</div>



  


  
  </Section>
          )}


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


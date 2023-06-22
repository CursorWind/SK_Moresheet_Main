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

  const strings = [];

  // Populate the array with 50 strings
  for (let i = 1; i <= 50; i++) {
    strings.push(`/images/home/activityDay/GeneratedPictures/r (${i}).jfif`);
  }

  return (
    <>
      <Head>
        <title>SKTD Gallery</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>วันแนะนำกิจกรรม 2023</Header>
          <Tdline />
          <p className="skc-body-medium">ภาพของน้องๆที่ Ai วาด</p>

          <div>
      {strings.map((string, index) => (
        <Image
        key={index}
        src={string}
        alt=""
        width={400}
        height={400}
        className="w-48 sm:rounded-lg inline-flex p-1"
      />
        
      ))}
    </div>
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


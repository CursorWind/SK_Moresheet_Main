// External libraries
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  ContentLayout,
  Section,
} from "@suankularb-components/react";

import TDtext from '../components/TDtitle';



// Types
import { CustomPage, LangCode } from "@/utils/types";

// Page
const IndexPage: CustomPage = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        
        <Section>
    <b><h1 className="skc-display-large display-large">{t("indexPage.title")} <TDtext>{t("indexPage.gradiented")}</TDtext></h1></b>
    <p className="skc-display-medium">{t("indexPage.desc")}<br/> {t("indexPage.desc2")}</p>
  </Section>
  <Image
          src="/images/home/Frame 8.png"
          width={1000}
          height={230}
          priority
          alt=""
          className="w-full sm:rounded-lg"
          style={{ zIndex: 3}}
        />

<div className="background-container">
    </div>
      </ContentLayout>

      <style jsx>{`
      .display-large{
        font-size: 160px;
        margin-top: 60px;
        margin-bottom: 30px;
      }
  .background-container {
    width: 100vw;
    height: 75vw;
    position: absolute;
    left: 0px; top: -20px;
    background-image: url("/images/Futuristic Backdrop.png");
    background-repeat: no-repeat;
    opacity: 0.6;
    background-size: cover;
  }
  body{
    overflow:hidden;
  }
`}</style>

    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: LangCode }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default IndexPage;
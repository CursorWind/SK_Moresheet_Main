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
    <b><h1 className="skc-display-large">{t("indexPage.title")} <TDtext>{t("indexPage.gradiented")}</TDtext></h1></b>
    <p className="skc-display-small">{t("indexPage.desc")}</p>
  </Section>
  <Image
          src="/images/home/Frame 8.png"
          width={1000}
          height={230}
          priority
          alt=""
          className="w-full sm:rounded-lg"
          style={{ zIndex: 3 }}
        />
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
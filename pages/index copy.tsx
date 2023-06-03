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
        <Image
          src="/images/home/banner.png"
          width={1141}
          height={285}
          priority
          alt=""
          className="w-full sm:rounded-lg"
        />
        <Section>
          <Header>{t("welcome.title")}</Header>
          <p className="skc-body-medium">{t("welcome.desc")}</p>
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

IndexPage.pageHeader = {
  title: { key: "title", ns: "home" },
};

export default IndexPage;

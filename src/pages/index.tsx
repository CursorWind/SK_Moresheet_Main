// Modules
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  Header,
  MaterialIcon,
  RegularLayout,
  Section,
  Title,
} from "@suankularb-components/react";

// Page
const Index: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <RegularLayout
        Title={
          <Title
            name={{ title: t("title") }}
            pageIcon={<MaterialIcon icon="home" />}
            backGoesTo="/"
          />
        }
      >
        <Section>
          <div className="relative aspect-[4/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/home/banner.webp"
              layout="fill"
              alt={t("welcome.banner")}
            />
          </div>
        </Section>
        <Section labelledBy="welcome">
          <Header
            icon={<MaterialIcon icon="waving_hand" allowCustomSize />}
            text={t("welcome.title")}
          />
          <p>{t("welcome.desc")}</p>
        </Section>
      </RegularLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Index;

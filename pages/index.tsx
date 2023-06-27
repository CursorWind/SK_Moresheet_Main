// External libraries
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  ContentLayout,
  Section,
  Button,
  MaterialIcon,
  
  
} from "@suankularb-components/react";




// Types
import { CustomPage, LangCode } from "@/utils/types";

// Page
const IndexPage: CustomPage = () => {
  const { t } = useTranslation(["home", "common"]);
  function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < window.innerHeight;
  }
  const isMobile = isMobileDevice();

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      
      <ContentLayout>
        
        <Section>
    <b><h1 className="skc-display-large display-large">SK English Club
    
    </h1></b>
    <p className="skc-display-medium">{t("indexPage.desc")}<br/> {t("indexPage.desc2")}</p>
  
    <div style={{ display: 'flex'}}>
    <Button className="w-5/12"
  appearance="filled"
  icon={<MaterialIcon icon="login" />}
  tooltip="Join us or else"
  href="/en-US/contacts"
>
  Join us
</Button>
<span className="w-3">

</span>
<Button className="w-5/12"
  appearance="outlined"
  icon={<MaterialIcon icon="info" />}
  tooltip="Just join us already"
  href="/en-US/about"
>
  Learn more
</Button>
<span className="w-3">

</span>
<Button className="w-5/12"
  appearance="filled"
  icon={<MaterialIcon icon="browse_activity" />}
  tooltip="Video"
  href="https://www.youtube.com/watch?v=yCpYeazvBTw"
  dangerous={true}
>
  TechDev Intro
  
</Button> </div>
  
  </Section>
  <Image
          src="/images/home/Frame 8.png"
          width={1000}
          height={230}
          priority
          alt=""
          className="w-full sm:rounded-lg"
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

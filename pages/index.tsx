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
    <b><h1 className="skc-display-large display-large">SK 
    
    {isMobile ? (
      <p className="gradient-text"> <br/>  <br/> Tech <br/>  <br/> Dev <img
      src="/images/Futuristic Backdrop Mobile.png"
      className="w-full absolute p-0 m-0 left-0 top-0"
      /> </p>
    ) : (
      <p className="gradient-text"> TechDev <img
      src="/images/Futuristic Backdrop.png"
      className="w-full absolute p-0 m-0 left-0 top-0"
      /> </p>
    )}

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
  href="/en-US/about"
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

      <style jsx>{`

.gradient-text {
  display: inline;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: radial-gradient(circle, #EB695A, #E98462, #6370B9, #A16499);

}

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
    z-index:-21;
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


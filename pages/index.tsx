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
      
      <ContentLayout className="ready">
        
        <Section>
       <h1 className="skc-display-largest"> {t("indexPage.title")} 
    
    <p className="gradient-text">
      {t("indexPage.gradiented")}
      
    </p>
<p className="skc-display-medium m-0 ">{t("indexPage.desc")} <br/> {t("indexPage.desc2")}</p>
    </h1>
    
  
    <div style={{ display: 'flex'}}>
    <Button className="w-5/12"
  appearance="filled"
  icon={<MaterialIcon icon="dynamic_form" />}
  tooltip="Go to sheets database page"
  href="/en-US/sheets"
>
  Full Database
</Button>
<span className="w-3">

</span>
<Button className="w-5/12"
  appearance="filled"
  icon={<MaterialIcon icon="info" />}
  tooltip="Just join us already"
  href="/en-US/about"
>
  Share Your Notes
</Button>
<span className="w-3">

</span>
<Button className="w-5/12"
  appearance="filled"
  icon={<MaterialIcon icon="policy" />}
  tooltip="Video"
  href="https://www.youtube.com/watch?v=yCpYeazvBTw"
  dangerous={true}
>
  Legal
  
</Button> </div>
  
  </Section>


      </ContentLayout>
      <div className="background-container">
    </div>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;750&display=swap');

        .gradient-text {
          display: inline;
          font-weight: 600;
          
          letter-spacing: -6.25px;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(115deg, rgba(255,255,255,1) 0%, rgba(158,255,255,1) 25%, rgba(99,112,185,1) 60%, rgba(161,100,153,1) 100%);
          padding:0px;
        }

        .background-container {
          opacity: 0.75;
    width: 100vw;
    height: 75vw;
    position: absolute;
    left: 0px; top: -50px;
    background-image: url("/images/MoreSheetBg.png");
    background-repeat: no-repeat;
    z-index:-21;
    background-size: cover;
  }`}
      </style>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: LangCode }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default IndexPage;

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
  MaterialIcon,
  TextField,
  Columns,
  Select, 
  MenuItem,
  ChipField,
  ChipSet,
  InputChip,
} from "@suankularb-components/react";

import React, { useState,FormEvent,ChangeEvent } from 'react';
import HeaderLine from "@/components/Extras/layouts/Lines";

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

  const [Attributes,setAT] = useState('')
  const [Subject,cS] = useState('')
  const [SearchQuery,SearchQueryUpdate] = useState('')
  const [AttributeSelected,selectAttribute] = useState('')

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>SK MoreSheet | Search Page</Header>
          <HeaderLine/>
          <p className="skc-body-medium">This text you are seeing here indicates either 1 - @squarecube is lazy af please go wake him 2 - This webpage is forgotten pls contact tonmai lmao. Currently, i am a placeholder and not functional. if you think this is a mistake, contact discord SquareCube or IG Cursorwind. Thanks. For now, enjoy reading whatever this leads you. glhf with life. </p>
        </Section>
        <Section>

        <Columns columns={3} className="my-3 !gap-y-12"> 
        <ChipField
  label="Classes learning this subject"
  value={Attributes}
  onChange={setAT}
  onNewEntry={(value) => selectAttribute(AttributeSelected)}
  onDeleteLast={() => selectAttribute(AttributeSelected.slice(0, -1))}
  placeholder="Enter class number"
> 
<ChipSet>
    {AttributeSelected.map((classItem) => (
      <InputChip
        key={classItem}
        onDelete={() =>
            selectAttribute(AttributeSelected.filter((item) => classItem !== item))
        }
      >
        {`M.${classItem}`}
      </InputChip>
    ))}
  </ChipSet>


</ChipField>
      <Select
  appearance="outlined"
  label={t("Searching.form.Subject")}
  helperMsg="Specify your subject"
  value={Subject}
  onChange={cS}
>
<MenuItem value="">Unselected</MenuItem> 
<MenuItem value="Biology">Biology</MenuItem>
  <MenuItem value="Chemistry">Chemistry</MenuItem>
  <MenuItem value="Physics">Physics</MenuItem>
  <MenuItem value="Math/Computer">Math/Computing</MenuItem>
  <MenuItem value="Eng">English</MenuItem>
  <MenuItem value="Thai">Thai</MenuItem>
  <MenuItem value="Social">Social/Geography/Culture</MenuItem>
  <MenuItem value="Others">Other</MenuItem>
</Select>
      <TextField<string>
        appearance="outlined"
        label={t("Searching.form.Query")}
        align="left"

        value={SearchQuery}
        onChange={(value) => SearchQueryUpdate(value)}
        inputAttr={{
          autoCapitalize: "off",
          spellCheck: false,
          onKeyUp: (event) => event.key === "Enter" && handleSubmit(),
        }}
      />

      
      </Columns>
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


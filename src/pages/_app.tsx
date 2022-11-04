// External libraries
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { appWithTranslation, useTranslation } from "next-i18next";

// SK Components
import { MaterialIcon, PageLayout } from "@suankularb-components/react";

// Fonts
import "@fontsource/sora/300.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-thai/300.css";
import "@fontsource/noto-sans-thai/400.css";
import "@fontsource/noto-sans-thai/500.css";
import "@fontsource/noto-sans-thai/700.css";
import "@fontsource/sarabun/300.css";
import "@fontsource/sarabun/400.css";
import "@fontsource/sarabun/500.css";
import "@fontsource/sarabun/700.css";

// Styles
import "@styles/global.css";

// Animations
import { animationEase } from "@utils/animations/config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LayoutGroup>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <PageLayout
            currentPath={router.asPath}
            navItems={[
              {
                name: t("navigation.home"),
                icon: {
                  inactive: <MaterialIcon icon="home" type="outlined" />,
                  active: <MaterialIcon icon="home" type="filled" />,
                },
                url: "/",
              },
              {
                name: t("navigation.login"),
                icon: {
                  inactive: <MaterialIcon icon="login" type="outlined" />,
                  active: <MaterialIcon icon="login" type="filled" />,
                },
                url: "/account/login",
              },
              {
                name: t("navigation.about"),
                icon: {
                  inactive: <MaterialIcon icon="information" type="outlined" />,
                  active: <MaterialIcon icon="information" type="filled" />,
                },
                url: "/about",
              },
            ]}
            LinkElement={({ children, href }) => (
              <Link href={href} legacyBehavior>
                {children}
              </Link>
            )}
          >
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: animationEase }}
            >
              <Component {...pageProps} />
            </motion.div>
          </PageLayout>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
};

export default appWithTranslation(App);

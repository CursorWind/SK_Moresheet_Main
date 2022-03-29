// Modules
import { AnimatePresence, motion } from "framer-motion";

import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

import { appWithTranslation, useTranslation } from "next-i18next";

// SK Components
import { MaterialIcon, PageLayout } from "@suankularb-components/react";

// Styles
import "@styles/global.css";

// Animations
import { animationTransition } from "@utils/animations/config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div className="overflow-hidden bg-background">
        <PageLayout
          key={router.route}
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
          LinkElement={Link}
        >
          <motion.div
            initial={{ opacity: 0, x: 0, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 10 }}
            transition={animationTransition}
            className="flex flex-grow flex-col overflow-auto"
          >
            <Component {...pageProps} />
          </motion.div>
        </PageLayout>
      </div>
    </AnimatePresence>
  );
};

export default appWithTranslation(App);

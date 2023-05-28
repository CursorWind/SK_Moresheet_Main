// External libraries
import { MotionConfig } from "framer-motion";
import {
  Inter,
  Space_Grotesk,
  Sarabun,
  IBM_Plex_Sans_Thai,
} from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { useState } from "react";

// SK Components
import { ThemeProvider } from "@suankularb-components/react";

// Internal components
import Layout from "@/components/Layout";

// Contexts
import SnackbarContext from "@/contexts/SnackbarContext";

// Styles
import "@/styles/globals.css";

// Utilities
import { CustomAppProps } from "@/utils/types";

// English fonts
const bodyFontEN = Inter({ subsets: ["latin"] });
const displayFontEN = Space_Grotesk({ subsets: ["latin"] });

// Thai fonts
const bodyFontTH = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});
const displayFontTH = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
});

function App({ Component, pageProps }: CustomAppProps) {
  const { fab, pageHeader, childURLs } = Component;
  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: -apple-system, BlinkMacSystemFont,
            ${bodyFontEN.style.fontFamily}, ${bodyFontTH.style.fontFamily};
          --font-display: ${displayFontEN.style.fontFamily},
            ${displayFontTH.style.fontFamily};
        }
      `}</style>

      <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Layout {...{ fab, pageHeader, childURLs }}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MotionConfig>
      </SnackbarContext.Provider>
    </>
  );
}

export default appWithTranslation(App);

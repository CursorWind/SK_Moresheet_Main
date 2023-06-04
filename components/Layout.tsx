// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Trans, useTranslation } from "next-i18next";

import { FC, ReactNode, useState } from "react";

// SK Components
import {
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  PageHeader,
  Progress,
  RootLayout,
  Snackbar,
} from "@suankularb-components/react";

// Internal components
import Favicon from "@/components/Favicon";

// Utilities
import { usePageIsLoading } from "@/utils/routing";
import { useSnackbar } from "@/utils/snackbar";
import { CustomPage } from "@/utils/types";

const Layout: FC<
  { children: ReactNode } & Pick<CustomPage, "fab" | "pageHeader" | "childURLs">
> = ({ children, fab, pageHeader, childURLs }) => {
  // Translation
  const { t } = useTranslation([
    "common",
    ...(typeof pageHeader?.title === "object" && "ns" in pageHeader?.title
      ? [(pageHeader.title as { ns: string }).ns]
      : []),
  ]);

  // Navigation Bar and Drawer
  const router = useRouter();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const getIsSelected = (pattern: RegExp) => pattern.test(router.pathname);

  // Root Layout
  const pageIsLoading = usePageIsLoading();

  // Snackbar
  const { snackbarOpen, setSnackbarOpen, snackbarProps } = useSnackbar();

  return (
    <RootLayout>
      {/* Navigation Drawer */}
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)}>
        {/* Top-level pages */}
        <NavDrawerSection
          header={
            <div className="skc-headline-small !tracking-tighter">
              <Trans i18nKey="brand.logoText" ns="common">
                <span>SK </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
                  แม่แบบ Next.js
                </span>
              </Trans>
            </div>
          }
          alt="SK Components"
        >
          <NavDrawerItem
            icon={<MaterialIcon icon="home" />}
            label='home'
            selected={router.pathname === "/"}
            href="/"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="login" />}
            label='login'
            selected={router.pathname === "/account/login"}
            href="/account/login"
            element={Link}
          />
          <NavDrawerItem
            icon={<MaterialIcon icon="info" />}
            label='about'
            selected={router.pathname === "/about"}
            href="/about"
            element={Link}
          />
        </NavDrawerSection>

        {/* Insert more Navigation Drawer Sections as your app expand. */}
      </NavDrawer>

      {/* Navigation Bar/Rail */}
      <NavBar
        brand={
          <Image
            src="/images/home/svgtdlogo.svg"
            priority
            width={56}
            height={56}
            alt=""
          />
        }
        fab={fab}
        onNavToggle={() => setNavOpen(true)}
        label={t("navigation.label")}
      >
        <NavBarItem
          icon={<MaterialIcon icon="home" />}
          label='home'
          selected={getIsSelected(/^\/$/)}
          href="/"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="login" />}
          label='login'
          selected={getIsSelected(/^\/account\/login/)}
          href="/account/login"
          element={Link}
        />
        <NavBarItem
          icon={<MaterialIcon icon="info" />}
          label='about'
          selected={getIsSelected(/^\/about/)}
          href="/about"
          element={Link}
        />
      </NavBar>

      {/* Page Header */}
      {pageHeader && (
        <PageHeader
          brand={<Favicon />}
          homeURL="/"
          buttonElement={Link}
          onNavToggle={() => setNavOpen(true)}
          {...pageHeader}
          title={
            typeof pageHeader.title === "object" && "ns" in pageHeader.title
              ? t(pageHeader.title.key, { ns: pageHeader.title.ns })
              : pageHeader.title
          }
        />
      )}

      {/* Page loading indicator */}
      <Progress
        appearance="linear"
        alt="Loading page…"
        visible={pageIsLoading}
      />

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        {...snackbarProps!}
      />

      {/* Content */}
      {children}
    </RootLayout>
  );
};

export default Layout;

import type { Metadata } from "next";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "@/components/ui/header/header";
import { Suspense } from "react";

import "./globals.scss";
import "./theme.scss";
import "./fonts.scss";
import { Footer } from "@/components/ui/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "only-if-cached",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback="Loading..">
      <StoryblokProvider>
        <html lang="sv">
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </StoryblokProvider>
    </Suspense>
  );
}

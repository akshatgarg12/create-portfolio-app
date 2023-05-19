import { appWithTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Head from "next/head";
import themes from "@/styles/themes.json";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DefaultSeo } from "next-seo";
import defaultSeoConfig from "@/config/defaultSeo.config";
import ThemeContext from "@/context/theme";

function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <Head>
        {/* TODO: replace this with a favicon */}
        <link rel="icon" href="/me.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`
            @layer base {
              :root {
                ${themes.map((themeItem) => {
                  if (themeItem.id === theme) {
                    return Object.keys(themeItem.colors)
                      .map((color: string) => {
                        // @ts-ignore
                        return `--${color} : ${themeItem.colors[color]};`;
                      })
                      .join("\n");
                  }
                })}
                }
              }
            `}
        </style>
      </Head>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export default appWithTranslation(App);

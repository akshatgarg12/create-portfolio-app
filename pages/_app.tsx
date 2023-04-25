import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Head from "next/head";
import themes from "@/styles/themes.json";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeContext from "@/context/theme";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Head>
        <title>Akshat Garg</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal portfolio of akshat garg" />
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

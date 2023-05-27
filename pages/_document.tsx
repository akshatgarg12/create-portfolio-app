import { Html, Head, Main, NextScript } from "next/document";
import i18n from "../next-i18next.config";
const Document = () => {
  return (
    <Html lang={i18n.i18n.defaultLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

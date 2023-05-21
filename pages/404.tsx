import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";
import NotFoundData from "@/config/404.json";
import { useTranslation } from "next-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export default function Custom404() {
  const { t } = useTranslation("common");
  return (
    <section className="bg-background min-h-[90vh] text-link flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">{t("404page.title")}</h1>
      {t("404page.subtext")
        .split("\n")
        .map((text, idx) => (
          <p key={idx} className="mb-4">
            {text}
          </p>
        ))}
      <ol className="list-disc pl-8 mb-8">
        {NotFoundData.books.map((book, idx) => (
          <li key={idx}>
            {book.name} by {book.author}
          </li>
        ))}
      </ol>
    </section>
  );
}

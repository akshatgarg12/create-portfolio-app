import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next/types";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export default function Resume() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("resume.title")}</title>
      </Head>
      <div className="bg-background min-h-screen py-10">
        <h4 className="text-2xl font-bold text-text text-center mb-6">
          {t("resume.title")}
        </h4>
        <iframe
          title="resume.pdf"
          src="/documents/resume.pdf#view=fit"
          className="min-w-[95%] sm:min-w-[80%] min-h-[80vh] sm:min-h-screen m-auto"
        />
      </div>
    </>
  );
}

import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next/types";
import PdfViewer from "@/components/PdfViewer";
import Subtext from "@/components/Subtext";

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
      <div className="bg-background min-h-[90vh] py-10 flex-flex-col justify-center">
        <Subtext text={t("resume.title")} />
        <div className="w-max-full">
          <PdfViewer file={"/documents/resume.pdf"} />
        </div>
      </div>
    </>
  );
}

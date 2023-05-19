import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";
export const initServerLocalization = async (
  locale: string | undefined = i18n.defaultLocale,
  paths: string[]
) => {
  return await serverSideTranslations(locale, paths);
};

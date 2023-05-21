import Image from "next/image";
import Contact from "@/components/Contact";
import HomeData from "@/config/home.json";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...HomeData,
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export interface ContactType {
  email: string;
  github_username: string;
  github_url: string;
  linkedin_username: string;
  linkedin_url: string;
}
export interface HomePropsType {
  name: string;
  title: string;
  about: string;
  contact: ContactType;
  myImage: string;
  workedAt: string[];
}

const Home = ({
  name,
  title,
  about,
  contact,
  myImage,
  workedAt,
}: HomePropsType) => {
  const { t } = useTranslation("common");
  const documentTitle = `${t("home.title")} | ${name}`;
  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <section className="py-20 bg-altBackground text-text text-center">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly md:space-x-20 items-center max-w-[750px] m-auto">
          <Image
            className="rounded-md"
            height={208}
            width={302}
            src={myImage}
            alt={"Photo of yours truly"}
          />
          <div className="flex flex-col items-center mt-10">
            <h3 className="text-2xl">
              {t("home.salutation") + " "}
              {name.split(" ").map((n, idx) => (
                <>
                  <span key={idx} className="text-link">
                    {n[0]}
                  </span>
                  {n.slice(1) + " "}
                </>
              ))}
              <br />
              <span className="text-link opacity-75">{title}</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center">
              <h4 className="m-auto opacity-75 font-normal mt-5">
                {t("home.workedAt") + " "}{" "}
              </h4>
              <div className="flex flex-row justify-center">
                {workedAt.map((companyLogo, idx) => (
                  <Image
                    key={idx}
                    height="85"
                    width="85"
                    alt="company-logo"
                    src={companyLogo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center bg-background text-text">
        <div className="w-9/12 m-auto">
          <h2 className="mb-4 text-xl underline font-bold">
            {t("home.about")}
          </h2>
          <p className="text-lg">{about}</p>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center bg-altBackground text-text">
        <div className="w-9/12 m-auto">
          <h2 className="mb-4 text-xl underline font-bold">
            {t("home.contact")}
          </h2>
          <Contact contact={contact} />
        </div>
      </section>
    </>
  );
};

export default Home;

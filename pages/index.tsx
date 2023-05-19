import Image from "next/image";
import Contact from "@/components/Contact";
import HomeData from "@/config/home.json";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { name, title, about, contact, myImage } = HomeData;
  return {
    props: {
      name,
      title,
      about,
      contact,
      myImage,
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
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
}

const Home = ({ name, title, about, contact, myImage }: HomePropsType) => {
  const { t } = useTranslation("common");
  const documentTitle = `${t("home.title")} | ${name}`;
  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <section className="p-60 flex flex-col items-center bg-altBackground text-text text-center">
        <Image
          className="rounded-md"
          height={208}
          width={302}
          src={myImage}
          alt={"Photo of yours truly"}
        />
        <h3 className="mt-7 text-xl">
          Hey 👋🏼, I&apos;m {name}
          <br /> {title}
        </h3>
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

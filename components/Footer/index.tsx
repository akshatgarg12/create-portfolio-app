import Link from "next/link";
import ThemeBar from "../ThemeBar";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="min-w-full min-h-[20vh] bg-altBackground flex flex-col justify-center">
      <ThemeBar />
      <h4 className="text-text text-center font-light">
        {t("footer.text") + " "}
        <Link
          className="text-link"
          href={"https://www.github.com/ToolCity"}
          target="blank"
        >
          @ToolCity
        </Link>
      </h4>
    </div>
  );
};
export default Footer;

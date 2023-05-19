import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  pathname: string;
}

const Navbar = ({ pathname }: NavbarProps) => {
  const [showMenuOnMobile, setShowMenuOnMobile] = useState(false);
  const { t } = useTranslation("common");
  const [navbarLinks, setNavbarLinks] = useState<any[]>([]);
  useEffect(() => {
    const links = [
      {
        key: "home",
        href: "/",
      },
      {
        key: "projects",
        href: "/projects",
      },
      {
        key: "experience",
        href: "/experience",
      },
      {
        key: "blog",
        href: "/blog",
      },
      {
        key: "resume",
        href: "/resume",
      },
    ];
    setNavbarLinks(() => {
      return links.map((link) => {
        return {
          key: link.key,
          label: t(`nav.${link.key}.label`),
          href: link.href,
        };
      });
    });
  }, [t]);
  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-background py-3 text-text shadow-lg lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border border-solid border-link bg-transparent py-2 px-2.5 text-text hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          onClick={() => setShowMenuOnMobile(!showMenuOnMobile)}
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className={`${
            !showMenuOnMobile && "!visible hidden"
          } flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
          id="navbarSupportedContent4"
          data-te-collapse-item
        >
          <ul
            className="list-style-none m-auto flex flex-col pl-0 lg:flex-row"
            style={{ margin: "auto" }}
            data-te-navbar-nav-ref
          >
            {navbarLinks.map((link, idx) => {
              return (
                <li key={idx} className="p-2" data-te-nav-item-ref>
                  <Link
                    className={`text-link ${
                      pathname.toLocaleLowerCase() !==
                        link.href.toLocaleLowerCase() && "opacity-60"
                    } hover:opacity-80 lg:px-2`}
                    href={link.href}
                    data-te-nav-link-ref
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

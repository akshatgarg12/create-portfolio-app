import i18n from "../../next-i18next.config";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SelectLocale = () => {
  const router = useRouter();
  const availableLocales = i18n.i18n.locales;
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex flex-row justify-center py-10">
      {/* Drop down for language select */}
      <div>
        <button
          className="text-text bg-background-400 text-xs px-4 py-2.5 text-center w-[150px]"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Change language ({router.locale})
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            !showDropDown ? "hidden" : null
          } bg-background divide-y divide-altBackground w-full`}
        >
          <ul
            className="py-2 text-sm text-text"
            aria-labelledby="dropdownDefaultButton"
          >
            {availableLocales.map((locale) => (
              <Link
                href="/"
                locale={locale}
                key={locale}
                className="block px-4 py-2 hover:bg-altBackground"
                onClick={() => {
                  setShowDropDown(false);
                }}
              >
                {locale}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectLocale;

import { useContext } from "react";
import themes from "@/styles/themes.json";
import ThemeContext from "@/context/theme";

const ThemeBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-row justify-center py-2">
      {themes.map((themeItem) => {
        const isCurrentTheme = themeItem.id === theme;
        const themeBackgroundColor = themeItem.colors["select-color"];
        return (
          <div
            key={themeItem.id}
            onClick={() => {
              setTheme(themeItem.id);
            }}
            style={{ backgroundColor: themeBackgroundColor }}
            className={`h-5 w-5 rounded-full mr-2 ${
              isCurrentTheme && "border-solid border-altBorder border-2"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default ThemeBar;

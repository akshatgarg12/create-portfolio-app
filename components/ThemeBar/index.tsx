import { useContext } from "react";
import themes from "@/styles/themes.json";
import ThemeContext from "@/context/theme";

const ThemeBar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className="flex flex-row justify-end bg-altText py-2">
            {
                themes.map((themeItem) => {
                   const isCurrentTheme = themeItem.id === theme;
                   const themeBackgroundColor = themeItem.colors['background-color'];
                   return (
                        <div key={themeItem.id} onClick={() => {
                            setTheme(themeItem.id)
                            console.log('theme :' , themeItem.id)
                        }} style={{backgroundColor:themeBackgroundColor}} className={`h-5 w-5 rounded-full mr-2 ${isCurrentTheme && 'border-solid border-altBorder border-2'}`}></div>
                    )
                })
             }
        </div>
    );
}
 
export default ThemeBar;
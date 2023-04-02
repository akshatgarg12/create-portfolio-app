import { useContext } from "react";
import ThemeContext from "@/context/theme";

const ThemeBar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className="flex flex-row justify-end bg-altText py-2">
            <div className="h-5 w-5 rounded-full mr-2 bg-background"></div>
            <div className="h-5 w-5 rounded-full mr-2 bg-altBackground"></div>
        </div>
    );
}
 
export default ThemeBar;
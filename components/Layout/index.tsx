import Navbar from "../Navbar";
import ThemeBar from "../ThemeBar";

interface LayoutProps{
    pathname : string
    children : React.ReactNode
}

const Layout = ({pathname, children} : LayoutProps) => {
    return (
        <>
            <Navbar pathname = {pathname}/>
            <ThemeBar />
            <main>{children}</main>
        </>
    );
}
 
export default Layout;
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  pathname: string;
  children: React.ReactNode;
}

const Layout = ({ pathname, children }: LayoutProps) => {
  return (
    <>
      <Navbar pathname={pathname} />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../templates/Footer";
import { Hero } from "../templates/Hero";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div className="text-gray-600 antialiased" style={{ overflow: "overlay" }}>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {children}
    <Footer />
  </div>
);

export default Layout;

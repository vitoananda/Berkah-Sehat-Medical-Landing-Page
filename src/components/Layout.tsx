import type { ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { AppConfig } from '../utils/AppConfig';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div className="text-gray-600 antialiased" style={{ overflow: 'overlay' }}>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {children}
    <Footer />
  </div>
);

export default Layout;

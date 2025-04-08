
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  withFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  fullWidth = false,
  withFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className={`flex-1 pt-16 ${fullWidth ? '' : 'container px-4 max-w-7xl mx-auto'}`}>
        {children}
      </main>
      
      {withFooter && <Footer />}
    </div>
  );
};

export default PageLayout;

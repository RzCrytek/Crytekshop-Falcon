import React from 'react';

import { Footer, Header } from './_includes';

function Layout({ children, pageId }) {
  return (
    <div id="wrapper">
      <Header />
      <main className="main" id={pageId}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

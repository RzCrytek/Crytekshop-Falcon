import React from 'react';
import { Link } from 'react-router-dom';

// import OrderSummary from '../../components/OrderSummary/OrderSummary';

import imageLogo from '../../images/logo.svg';

function Layout({ children, pageId }) {
  const [childInformation, childSidebar] = children;

  return (
    <div id="wrapper">
      <main className="checkout" id={pageId}>
        <div className="banner">
          <Link to="/">
            <picture>
              <img src={imageLogo} alt="Logo" />
            </picture>
          </Link>
        </div>

        <div className="container">
          <section className="information">
            <div className="information-content">
              <h1>INFORMATION CONTENT</h1>
              {/* {children[1]} */}
              {childInformation}
            </div>
          </section>

          <aside className="summary-sidebar">
            <div className="sidebar-content">
              <h1>siderbar content</h1>
              {/* {children[2]} */}
              {childSidebar}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

Layout.Information = (props) => <>{props.children}</>;
Layout.Sidebar = (props) => <>{props.children}</>;
// Layout.Information = ({ childInfo }) => <div className="info">{childInfo}</div>;

export default Layout;

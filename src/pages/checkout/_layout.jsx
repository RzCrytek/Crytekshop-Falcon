import React from 'react';
import { Link } from 'react-router-dom';

import imageLogo from '../../images/logo.svg';

function Layout({ children, pageId }) {
  const [childInformation, childSidebar] = children;

  return (
    <div id="wrapper">
      <main className="lyt-checkout" id={pageId}>
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
              {/* {children[1]} */}
              {childInformation}
            </div>
          </section>

          <aside className="summary-sidebar">
            <div className="sidebar-content">
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

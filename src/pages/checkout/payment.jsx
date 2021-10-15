import React from 'react';
import Layout from './_layout';

const PaymentPage = () => {
  return (
    <Layout pageId="payment">
      <Layout.Information>
        <p>desde payment info</p>
      </Layout.Information>

      <Layout.Sidebar>
        <p>desde payment sidebar</p>
      </Layout.Sidebar>
    </Layout>
  );
};

export default PaymentPage;

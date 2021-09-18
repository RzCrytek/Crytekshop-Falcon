import React from 'react';
import { Header } from './_includes';

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <h1>no se encontró la página</h1>
        <img src="/img/no-photo.png" alt="" />
      </main>
    </>
  );
};

export default NotFound;

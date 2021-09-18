import React from 'react';

import * as styles from './ItemDetail.module.scss';

import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ detail }) => {
  console.log('detail:', detail);

  if (!detail.length) return <p>No existe el producto</p>;

  return (
    <a className={styles.card} href="#!">
      <picture>
        {/* <img src="img/no-photo.png" alt="No hay imagen" /> */}
        <img src={detail.image} alt={detail.name} />
      </picture>

      <div className={styles.summary}>
        <h2 className={styles.name}>{detail.name}</h2>
        <div className={styles.detail}>
          <p>Estado: {detail.status}</p>
          <p>Especie: {detail.species}</p>
          <p>Género: {detail.gender}</p>
          <p>Precio: S/. {detail.episode.length}</p>
        </div>
      </div>

      <ItemCount stock={5} initial={1} />
    </a>
  );
};

export default ItemDetail;

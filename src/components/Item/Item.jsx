import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Item.module.scss';

import ItemCount from '../ItemCount/ItemCount';

const Item = ({ character }) => {
  return (
    <Link className={styles.card} to={`/producto/${character.id}`}>
      <picture>
        {/* <img src="img/no-photo.png" alt="No hay imagen" /> */}
        <img src={character.image} alt={character.name} />
      </picture>

      <div className={styles.summary}>
        <h2 className={styles.name}>{character.name}</h2>
        <p className={styles.price}>
          <span className="current">S/. {character.episode.length}</span>
          <del>S/. {character.episode.length + 20}</del>
        </p>
      </div>

      <ItemCount stock={5} initial={1} />
    </Link>
  );
};

export default Item;

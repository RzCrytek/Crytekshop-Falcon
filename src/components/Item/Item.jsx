import ItemCount from '../ItemCount/ItemCount';

import * as styles from './Item.module.scss';

const Item = ({ character }) => {
  return (
    <a className={styles.card} href="#!">
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
    </a>
  );
};

export default Item;

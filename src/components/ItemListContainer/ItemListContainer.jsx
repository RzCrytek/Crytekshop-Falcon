import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
  return (
    <div className="container">
      <p>Contenedor de los cards</p>

      <div className="cards-box">
        <a className="card" href="#!">
          <picture>
            <img src="img/no-photo.png" alt="No hay imagen" />
          </picture>

          <div className="summary">
            <h2 className="name">Lorem Ipsum Lorem Ipsum</h2>
            <p className="price">
              <span className="current">S/. 100.00</span>
              <del>S/. 200.00</del>
            </p>
          </div>

          <ItemCount stock={5} initial={1} />
        </a>
      </div>
    </div>
  );
};

export default ItemListContainer;

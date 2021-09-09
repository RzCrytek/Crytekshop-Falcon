import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
  const onAdd = (quantity) => {
    console.log(
      'Soy el padre de counter y resivo la cantidad desde mi hijo counter:',
      quantity
    );
  };

  return (
    <div className="container">
      <p>Contenedor de los cards</p>

      <div className="cards-box">
        <a className="card" href="#!">
          <picture>{/* <img src="" alt="" /> */}</picture>

          <div className="summary">
            <h2 className="name">Lorem Ipsum Lorem Ipsum</h2>
            <p className="price">
              <span className="current">S/. 100.00</span>
              <del>S/. 200.00</del>
            </p>
          </div>

          <ItemCount stock={10} initial={1} onAddButton={onAdd} />

          <button className="btn">AGREGAR A CARRITO</button>
        </a>
      </div>
    </div>
  );
};

export default ItemListContainer;

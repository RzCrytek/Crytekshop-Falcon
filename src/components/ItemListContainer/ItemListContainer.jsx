import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  return (
    <div className="container">
      <div className="options">
        <h2>LISTA DE PERSONAJES</h2>
      </div>

      <ItemList />
    </div>
  );
};

export default ItemListContainer;

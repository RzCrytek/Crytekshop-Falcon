import { useEffect, useState } from 'react';

import './ItemList.scss';
import Item from '../Item/Item';

const ItemList = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getCharacter = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await response.json();

      if (results) {
        setData(results);
      } else {
        throw new Error('algo falló');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      getCharacter();
    }, 2000);
  }, []);

  return (
    <div className="cards-box">
      {loader && <p>Cargando ...</p>}
      {data?.map((value) => {
        return <Item character={value} key={value.id} />;
      })}
    </div>
  );
};

export default ItemList;

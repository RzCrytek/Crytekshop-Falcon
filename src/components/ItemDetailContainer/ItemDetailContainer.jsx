import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getDetail = async () => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/1'
      );
      const result = await response.json();

      if (result) {
        setData(result);
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
    setTimeout(() => {
      getDetail();
    }, 2000);
  }, []);

  console.log('ItemDetail data:', data);

  return (
    <div className="container">
      <div className="options">
        <h2>DETALLE DE UN PERSONAJE</h2>
        {loader ? <p>Cargando ...</p> : <ItemDetail detail={data} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;

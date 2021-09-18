import React, { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const result = await response.json();

        console.log(result.error);

        if (!result.error) {
          setData(result);
        } else {
          throw new Error('algo falló');
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log('finally');
        setLoader(false);
      }
    };

    setTimeout(() => {
      getDetail();
    }, 2000);
  }, [id]);

  console.log('ItemDetail data:', data);

  return <>{loader ? <p>Cargando ...</p> : <ItemDetail detail={data} />}</>;
};

export default ItemDetailContainer;

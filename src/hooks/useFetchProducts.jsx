import { useEffect, useState } from 'react';
import getFetch from '../services/getFetch';

const useFetchProducts = (url) => {
  const initial = {
    data: [],
    loader: true,
  };

  const [state, setState] = useState(initial);

  useEffect(() => {
    setTimeout(() => {
      getFetch(url)
        .then((response) => {
          console.log('response:', response);
          setState({
            data: response.results,
            loader: false,
          });
        })
        .catch((error) => console.error(error));
    }, 0);
  }, [url]);

  return state;
};

export default useFetchProducts;

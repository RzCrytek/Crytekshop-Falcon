import { useEffect, useState } from 'react';
import getFetch from '../services/getFetch';

const useFetchProducts = (url) => {
  const initial = {
    data: [],
    loader: true,
  };

  const [state, setState] = useState(initial);

  useEffect(() => {
    getFetch(url)
      .then((response) => {
        setState({
          data: response.results,
          loader: false,
        });
      })
      .catch((error) => console.error(error));
  }, [url]);

  return state;
};

export default useFetchProducts;

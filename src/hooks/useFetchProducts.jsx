import { useEffect, useState } from 'react';
import getFetch from '../services/getFetch';

const useFetchProducts = (url) => {
  const initial = {
    data: [],
    loader: true,
  };

  const [state, setState] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();

    getFetch(url, controller)
      .then((response) => {
        setState({
          data: response.results,
          loader: false,
        });
      })
      .catch((error) => {
        if (error.name === 'AbortError') console.warn('Request aborted');
        else console.error(error);
      })
      .finally(() => {
        if (!controller.signal.aborted) console.log('finally');
      });

    return () => controller.abort();
  }, [url]);

  return state;
};

export default useFetchProducts;

import { useState } from 'react';

import { collection, getDocs, query, where } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';
import { useEffect } from 'react';

const initial = {
  data: [],
  loader: true,
};

const useGetDocsFilter = (collectionName, filterQuery) => {
  const [docsCollection, setDocsCollection] = useState(initial);

  const conditionalFirestore = ['>', '>=', '<', '<='];
  const [field, conditional, valor] = filterQuery;
  const isOrderBy = conditionalFirestore.includes(conditional);

  console.log('isOrderBy:', isOrderBy);

  useEffect(() => {
    const getDocsCollection = async () => {
      const q = query(
        collection(db, collectionName),
        where(field, conditional, valor)
      );

      const querySnapshot = await getDocs(q);

      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    };

    getDocsCollection();
  }, [collectionName, field, conditional, valor]);

  return docsCollection;
};

export default useGetDocsFilter;

import { useEffect, useState } from 'react';

import { collection, onSnapshot, query, where } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const initial = {
  data: [],
  loader: true,
};

const useGetDocsFilterOnSnapshot = (collectionName, filterQuery = []) => {
  const [docsCollection, setDocsCollection] = useState(initial);

  const isFilterQuery = filterQuery.length ? true : false;
  const [field, conditional, valor] = filterQuery;

  useEffect(() => {
    let q;
    if (isFilterQuery) {
      q = query(
        collection(db, collectionName),
        where(field, conditional, valor)
      );
    } else {
      q = query(collection(db, collectionName));
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    });

    return () => unsubscribe();
  }, [collectionName, isFilterQuery, field, conditional, valor]);

  return docsCollection;
};

export default useGetDocsFilterOnSnapshot;

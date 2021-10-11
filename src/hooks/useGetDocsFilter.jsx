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

  console.log('filterQuery:', filterQuery);

  // const isFilterQuery = filterQuery.length ? true : false;
  const [field, conditional, valor] = filterQuery;

  // const conditionalFirestore = ['>', '>=', '<', '<='];
  // const isOrderBy = conditionalFirestore.includes(conditional);

  useEffect(() => {
    if (!filterQuery.length) return;

    const getDocsCollection = async () => {
      let q;
      if (filterQuery !== 'all') {
        console.log('IF');
        q = query(
          collection(db, collectionName),
          where(field, conditional, valor)
        );
      } else {
        console.log('ELSE');
        q = query(collection(db, collectionName));
      }

      const querySnapshot = await getDocs(q);

      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    };

    getDocsCollection();
  }, [collectionName, filterQuery, field, conditional, valor]);

  return docsCollection;
};

export default useGetDocsFilter;

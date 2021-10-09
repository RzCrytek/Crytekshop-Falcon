import { useState } from 'react';

import { collection, getDocs, query, where } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';
import { useEffect } from 'react';

const initial = {
  data: [],
  loader: true,
};

const useGetDocsFilter = (collectionName, filterQuery = []) => {
  const [docsCollection, setDocsCollection] = useState(initial);

  // const conditionalFirestore = ['>', '>=', '<', '<='];
  const isFilterQuery = filterQuery.length ? true : false;
  const [field, conditional, valor] = filterQuery;
  // const isOrderBy = conditionalFirestore.includes(conditional);

  // console.log('isFilterQuery:', isFilterQuery);
  // console.log('isOrderBy:', isOrderBy);

  useEffect(() => {
    const getDocsCollection = async () => {
      let q;
      if (isFilterQuery) {
        q = query(
          collection(db, collectionName),
          where(field, conditional, valor)
        );
      } else {
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
  }, [collectionName, isFilterQuery, field, conditional, valor]);

  return docsCollection;
};

export default useGetDocsFilter;

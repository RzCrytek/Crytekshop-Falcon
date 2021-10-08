import { useState } from 'react';

import { collection, getDocs } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';
import { useEffect } from 'react';

const initial = {
  data: [],
  loader: true,
};

const useGetDocs = (collectionName) => {
  const [docsCollection, setDocsCollection] = useState(initial);

  useEffect(() => {
    const getDocsCollection = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      console.log('querySnapshot firebase:', querySnapshot);

      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    };

    getDocsCollection();
  }, [collectionName]);

  return docsCollection;
};

export default useGetDocs;

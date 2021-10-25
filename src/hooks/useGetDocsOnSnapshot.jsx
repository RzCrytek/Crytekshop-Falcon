import { useEffect, useState } from 'react';

import { collection, onSnapshot } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const initial = {
  data: [],
  loader: true,
};

const useGetDocsOnSnapshot = (collectionName) => {
  const [docsCollection, setDocsCollection] = useState(initial);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const arrQuerySnapshot = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        setDocsCollection({ data: arrQuerySnapshot, loader: false });
      },
      (error) => {
        setDocsCollection((prev) => ({
          ...prev,
        }));
        console.error('error:', error);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return docsCollection;
};

export default useGetDocsOnSnapshot;

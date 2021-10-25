import { useEffect, useState } from 'react';

import { doc, onSnapshot } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const initial = {
  document: [],
  loader: true,
  isDocument: true,
};

const useGetDocOnSnapshot = (collection, documentId) => {
  const [document, setDocument] = useState(initial);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, collection, documentId), (doc) => {
      if (doc.exists()) {
        setDocument((prev) => ({
          ...prev,
          document: { id: doc.id, ...doc.data() },
          loader: false,
        }));
      } else {
        setDocument((prev) => ({ ...prev, isDocument: false, loader: false }));
        console.warn('No existe el documento y/o producto');
      }
    });

    return () => unsubscribe();
  }, [collection, documentId]);

  return document;
};

export default useGetDocOnSnapshot;

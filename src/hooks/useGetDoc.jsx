import { useEffect, useState } from 'react';

import { doc, getDoc } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const initial = {
  document: [],
  loader: true,
  isDocument: true,
};

const useGetDoc = (collection, documentId) => {
  const [document, setDocument] = useState(initial);

  useEffect(() => {
    const getDocument = async () => {
      const docSnap = await getDoc(doc(db, collection, documentId));

      console.log('docSnap:', docSnap.data());

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setDocument((prev) => ({
          ...prev,
          document: { id: docSnap.id, ...docSnap.data() },
          loader: false,
        }));
      } else {
        setDocument((prev) => ({ ...prev, isDocument: false, loader: false }));
        console.log('No existe el documento y/o producto');
      }
    };

    getDocument();
  }, [collection, documentId]);

  return document;
};

export default useGetDoc;

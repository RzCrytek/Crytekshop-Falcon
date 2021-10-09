import { useEffect, useState } from 'react';

import { collection, getDocs } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const useGetCategoryId = (categoryParam, categories) => {
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    if (categoryParam && categories) setCategoryId('');

    const paramData = categories.find(
      (document) => document.slug === categoryParam
    );

    setCategoryId(paramData?.key);
  }, [categoryParam, categories]);

  return categoryId;
};

export default useGetCategoryId;

// const useGetCategoryId = (categoryParam) => {
//   const [categoryId, setCategoryId] = useState();

//   useEffect(() => {
//     const categoryId = async () => {
//       const querySnapshot = await getDocs(collection(db, 'categories'));

//       const data = querySnapshot.docs.find(
//         (document) => document.data().slug === categoryParam
//       );

//       const keyCat = data.data().key;
//       setCategoryId(keyCat);
//       console.log('arrQuerySnapshot:', keyCat);
//     };

//     categoryId();
//   }, [categoryParam]);

//   return categoryId;
// };

// export default useGetCategoryId;

// const getReferencia = async () => {
//   const docRef = doc(db, 'categories', 'IgcwDaD8szJuH3P8XIF4');

//   console.log('docRef:', docRef);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     // console.log('Document data:', docSnap);
//   } else {
//     // doc.data() will be undefined in this case
//     console.log('No such document!');
//   }

//   const q = query(
//     collection(db, 'products'),
//     where('categoryKey', '==', docRef)
//   );
//   const querySnapshot = await getDocs(q);

//   // console.log('querySnapshot:', querySnapshot);
// };

// // getReferencia();

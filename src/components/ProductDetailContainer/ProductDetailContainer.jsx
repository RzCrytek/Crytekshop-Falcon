import { doc, getDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebaseConfig';

// import useFetchProducts from '../../hooks/useFetchProducts';
import Loader from '../Loader/Loader';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductDetailContainer = ({ id }) => {
  console.log('id param:', id);
  // const { data: comics, loader } = useFetchProducts('/comics/' + id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(doc(db, 'products', `${id}`));
      console.log('docSnap firebase:', docSnap);
      console.log('docSnap firebase:', docSnap.data());

      // const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
      //   id: document.id,
      //   ...document.data(),
      // }));

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    };

    getProduct();
  }, [id]);

  console.log('product:', product);

  // return <p></p>;

  // return <>{loader ? <Loader /> : <ProductDetail detail={product} />}</>;
  return <ProductDetail detail={product} />;
};

export default ProductDetailContainer;

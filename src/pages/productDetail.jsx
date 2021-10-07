import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { doc, getDoc } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

import Loader from '../components/Loader/Loader';
import { DetailView } from '../components/pages';

import Layout from './_layout';

const ProductDetailPage = () => {
  const { id } = useParams();

  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(doc(db, 'products', `${id}`));
      console.log('docSnap firebase:', docSnap);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setProduct({ id: docSnap.id, ...docSnap.data() });
        setLoader(false);
      } else {
        // doc.data() will be undefined in this case
        console.log('No existe el documento y/o producto');
      }
    };

    getProduct();
  }, [id]);

  return (
    <Layout pageId="product-detail">
      <div className="options">
        <div className="container">
          <Link className="btn btn--back" to="/productos">
            <i
              className="ico"
              style={{ backgroundImage: "url('/img/icons/arrow--left.svg')" }}
            ></i>
            Regresar
          </Link>
        </div>
      </div>

      <div className="container">
        {loader ? <Loader /> : <DetailView detail={product} />}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

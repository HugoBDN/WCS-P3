import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils/const";
import Layout from "../layouts/Layout";
import ProductMainContainer from "./ProductMainContainer";

export default function Product() {
  const { id } = useParams();
  console.info("id", id);
  // Faire une requête à l'API pour obtenir les détails du produit avec l'ID id
  const [productById, setProductById] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductById(data));
  }, []);

  console.info("toto", productById);

  return (
    <Layout>
      <ProductMainContainer productById={productById} />
    </Layout>
  );
}

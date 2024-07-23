/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import Layout from "./layouts/Layout";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "../utils/const";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBarMobile";

export default function CatalogueProduct() {
  const { id } = useParams();
  console.info("id", id);
  // Faire une requête à l'API pour obtenir les détails du produit avec l'ID id
  const [productByCategory, setProductByCategory] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    fetch(`${baseUrl}/api/product-cat/${id}`)
      .then((res) => res.json())
      .then((data) => setProductByCategory(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [key, id]); // Dependency on ID ensures fetch reruns if ID changes

  console.info("toto", productByCategory);
  return (
    <Layout>
      <div className="min-h-screen flex w-full flex-wrap p-4 md:p-8 relative">
        <h1 className="text-black md:font-sans ld:text-5xl md:text-3xl font-semibold decoration-solid w-full mb-16">
          Tous nos produits
        </h1>
        <SideBarMobile
          productByCategory={productByCategory}
          setProductByCategory={setProductByCategory}
          setKey={setKey}
          id={id}
        />
        <SideBar
          productByCategory={productByCategory}
          setProductByCategory={setProductByCategory}
          setKey={setKey}
          id={id}
        />
        <div className="w-full md:w-4/5">
          <div className="w-full flex flex-wrap">
            {productByCategory.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/3 md:px-4 ld:px-8  mb-20 "
              >
                <Link
                  className="inline-block w-full md:h-[400px] ld:h-[700px]"
                  to={`/product/${product.id}`}
                >
                  <img
                    src={`${baseUrl}/${product.img_url}`}
                    alt={`Produit ${product.name}`}
                    className="inline-block w-full h-full object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="font-bold">{product.name}</p>
                  <p>{`${product.spc_name} pour ${product.pc_name}`}</p>
                  <p>{`${product.description}`}</p>
                  <p className="font-semibold text-xl ">{`${product.price},00 €`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

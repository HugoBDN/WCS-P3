import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/const";
import Layout from "../layouts/Layout";

export default function OrderDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/order-detail`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.info("details", details);
  return (
    <Layout>
      <div>
        <ul>
          listes
          <li />
        </ul>
      </div>
    </Layout>
  );
}

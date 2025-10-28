import { useEffect } from "react";
const APIURL = "https://dummyjson.com/products";

const Products = () => {
  useEffect(() => {
    let controller = new AbortController();

    async function getProducts() {
      let resp = await fetch(APIURL, { signal: controller.signal });
      let data = await resp.json();
      console.log(data.products);
    }
    getProducts();

    return () => {
      controller.abort("component unmounted");
      console.log("API CALL CANCELLED");
    };
  }, []);

  return <div>Products</div>;
};

export default Products;

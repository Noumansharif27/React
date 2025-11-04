import Product from "./Product";

function ProductList() {
  return (
    <>
      <Product tittle="Tablet" price={200} />
      <Product tittle="Mobile" price={95000} />
      <Product tittle="Laptop" />
    </>
  );
}

export default ProductList;

import Product from "./Product";

function ProductList() {
  let options = ["Hight", "wall", "Hamu"];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };

  return (
    <>
      <Product tittle="Tablet" price={200} features={options} />
      <Product tittle="Mobile" price={95000} />
      <Product tittle="Laptop" />
    </>
  );
}

export default ProductList;

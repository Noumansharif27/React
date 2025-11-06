import Product from "./Product";

function ProductList() {
  // let options = [<li>"Hight"</li>, <li>"wall"</li>, <li>"Hamu"</li>];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };

  return (
    <>
      <Product
        tittle="Tablet"
        price={200}
        // features={{ a: "hi-tech", b: "durable", c: "fast" }}
        // features2={options2}
      />
      <Product tittle="Mobile" price={95000} />
      <Product tittle="Laptop" price={2999} />
    </>
  );
}

export default ProductList;

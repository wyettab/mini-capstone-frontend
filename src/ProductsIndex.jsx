export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="product-index">
      <h1>All Products</h1>
      <div className="products">
        {props.products.map((product) => (
          <div key={product.id}>
            <h2>Instrument Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <img src={product.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

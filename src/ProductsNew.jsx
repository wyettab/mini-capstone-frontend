import axios from "axios";

export function ProductsNew() {
  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log("Created Products", response.data);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit new product", params);
    const params = new FormData(event.target);
    handleCreateProduct(params);
    //axios.post("http://localhost:3000/products.json", params).then((response) => {
    //  console.log(response.data);
    //  event.target.reset();
    //});
  };
  return (
    <div id="products-new">
      <form onSubmit={handleSubmit}>
        <h1>New Product</h1>
        <label>Name: </label>
        <input type="text" name="name" className="form-control" />
        <label>Description: </label>
        <input type="text" name="description" className="form-control" />
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

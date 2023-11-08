import Shopping from "./Shopping.js";
function Product() {
  //pick returns how many items mut be displayed on the product/homepage
  let pick = [1, 3];
  return <Shopping forProd={pick} />;
}
export default Product;

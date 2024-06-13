import { useEffect } from "react";
import ProductContext, { useProduct } from "../context/ProductContext";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import ListProduct from "../product/ListProduct";
import BuyList from "../product/BuyList";

const Product = () => {
  const { product, del, read, cardTotalCount, data } = useProduct();

  useEffect(() => {
    read();
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="product">
          <div className="product_icon">
            <h6>Watch</h6>
            <h1>Our Available Product</h1>
            <p>
              Watch is such a desired fashion accessory and is seen as a <br />
              necessary cupboard piece for both men and women. <br />
              Wristwatches are generally.
            </p>
          </div>
          <div className="non">
            <>
              {data ? (
                data.map((el) => <ListProduct el={el} />)
              ) : (
                <h2>Loading</h2>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

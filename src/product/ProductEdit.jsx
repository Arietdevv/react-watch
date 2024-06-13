import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { editCard, edit, getOneProduct, oneProduct } = useProduct();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescr(oneProduct.descr);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  console.log(oneProduct);
  function saveEdit() {
    const newEdit = {
      title: title,
      price: price,
      descr: descr,
      image: image,
    };
    edit(id, newEdit);
    navigate("/");
  }

  return (
    <Container sx={{ textAlign: "center", p: 20 }}>
      <Typography sx={{ fontSize: "40px" }}>Edit</Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="title"
            value={title}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            label="price"
            value={price}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setDescr(e.target.value)}
            label="description"
            value={descr}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setImage(e.target.value)}
            label="URL"
            value={image}
          />
        </Grid>
      </Grid>
      <Button onClick={saveEdit} variant="contained">
        Save
      </Button>
    </Container>
  );
};

export default ProductEdit;

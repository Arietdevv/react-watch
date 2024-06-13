import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { product, read, create } = useProduct();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  function addProduct() {
    let newObj = {
      title: title,
      price: price,
      descr: descr,
      image: image,
    };
    create(newObj);
    navigate("/");
  }

  return (
    <Container sx={{ textAlign: "center", p: 20 }}>
      <Typography sx={{ fontSize: "40px" }}>Create</Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField onChange={(e) => setTitle(e.target.value)} label="title" />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setPrice(e.target.value)} label="price" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setDescr(e.target.value)}
            label="description"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setImage(e.target.value)} label="URL" />
        </Grid>
      </Grid>
      <Button onClick={() => addProduct()} variant="contained">
        Create
      </Button>
    </Container>
  );
};

export default AddProduct;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ListProduct = ({ el }) => {
  const { del, getToBuy } = useProduct();
  const navigate = useNavigate();
  function handleGetToBuy(id) {
    getToBuy(id);
    navigate("/buy");
  }
  return (
    <div>
      {
        <Card
          sx={{
            maxWidth: 345,
            width: 345,
          }}
        >
          <CardMedia
            sx={{ height: 400, objectFit: "contain" }}
            image={el.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>{el.price}</Typography>
            <Typography variant="body2" color="text.secondary">
              {el.descr}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "320px",
            }}
          >
            <Button
              onClick={() => handleGetToBuy(el.id)}
              variant="contained"
              color="success"
              size="small"
            >
              Buy
            </Button>
            <Button
              onClick={() => navigate(`edit/${el.id}`)}
              variant="contained"
              size="small"
            >
              Edit
            </Button>
            <Button
              onClick={(e) => del(el.id)}
              variant="outlined"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      }
    </div>
  );
};

export default ListProduct;
// {
//   <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//       sx={{ height: 140 }}
//       image={el.image}
//       title="green iguana"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {el.title}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {el.descr}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button
//         onClick={(e) => del(el.id)}
//         variant="contained"
//         size="small"
//       >
//         Delete
//       </Button>
//     </CardActions>
//   </Card>
// }

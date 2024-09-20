import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ title, price, imageUrl, description }) => {
  return (
    <Card sx={{ width: 350, height: 300 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Precio {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Detalle</Button>
      </CardActions>
    </Card>
    // <div className="card">
    //   <article className="card-item">
    //     <a className="card-item__link" href="#">
    //       <picture className="card-item__cover">
    //         <span className="card-item__tag">Invierno 24</span>
    //         <img
    //           className="card-item__img--front"
    //           src={foto}
    //           alt="zapatoMujerModeloE225"
    //           width="540px"
    //           height="425px"
    //         />
    //       </picture>
    //       <div className="card-item__content">
    //         <h4 className="card-item__name">{titulo}</h4>
    //         <p className="card-item__price">{precio}</p>
    //         <p className="card-item__promo">3 cuotas sin interes</p>
    //       </div>
    //     </a>
    //   </article>
    // </div>
  );
};

export default ProductCard;

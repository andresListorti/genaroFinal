import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ titulo, precio, foto }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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

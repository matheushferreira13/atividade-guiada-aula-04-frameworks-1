import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 300, mt: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagem}
        alt={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descricao}
        </Typography>
        <Typography variant="h6" sx={{ color: 'success.main', mt: 1, fontWeight: 'bold' }}>
          R$ {preco}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
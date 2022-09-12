import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, image, types}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="pokemon-image"
        height="180"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {types.map((type)=>{return type.type.name + " "})}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Excluir</Button>
        <Button size="small"> Editar</Button>
      </CardActions>
    </Card>
  );
}

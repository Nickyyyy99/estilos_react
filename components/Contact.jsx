import React from 'react'
import styles from './contact.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Contact() {
  return (
    <div className={styles.y}>
        <h2>CONTACTO</h2>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="img"
        height="140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Michis cards
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">AGREGAR</Button>
        <Button variant="outlined" color="error">ELIMINAR</Button>
      </CardActions>
    </Card>
    </div>
  )
}

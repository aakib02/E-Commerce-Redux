import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import { CartData } from '../features/CartSlice';
import { WishData } from '../features/WishListSlice';
export default function Product(props) {
  const dispatch = useDispatch()
  const {value} = props
  return (
    <Card sx={{ maxWidth: 255,height:"23rem", p:"0.2rem",position:"relative",boxShadow:"2px 2px 3px gray",cursor:"pointer"}}>
       <Checkbox sx={{position:"absolute",right:"4px"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={()=>{dispatch(WishData(value))}} ></Checkbox>
       <Link to={`singleproduct/${value.id}`}>
       
      <CardMedia 
        sx={{ height: 200, width:120, mx:"auto", objectFit:"contain",backgroundSize:"contain",transition: 'transform 0.3s ease-in-out', ":hover":{transform: 'scale(1.1)' },}}
        image={value.image}
        title="green iguana"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" 
        sx={{fontSize:"1rem", WebkitLineClamp: '2',overflow: 'hidden',textOverflow: 'ellipsis',WebkitBoxOrient: 'vertical' ,display: '-webkit-box'}}>
          {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"     sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          mb:"2rem"
        }}>
    
       {value.description}
        </Typography>
      </CardContent>
      <CardActions sx={{position:'absolute',bottom:"1px"}}>
        <Button variant='contained' size="small" endIcon={<ShoppingCartIcon/>} onClick={()=>{dispatch(CartData(value))}} >Add Cart</Button>
        <Button variant='contained' color='warning' size="small" endIcon={<InfoIcon/>}>details</Button>
      </CardActions>
    </Card>
  );
}

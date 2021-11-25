import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { clientContext } from '../contexts/ClientContext';
export default function MediaCard({ phone }) {
    const { addAndDeletePhoneInCart, checkPhoneInCart } = React.useContext(clientContext)

    return (
        <>
            <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="140"
                    style={{ objectFit: 'contain' }}
                    image={phone.image}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {phone.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {phone.description}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button onClick={() => addAndDeletePhoneInCart(phone)} size="small"><AddShoppingCartIcon color={checkPhoneInCart(phone.id) ? 'error' : ''} /></Button>

                    <Link to={`/phone/${phone.id}`} >
                        <Button size="small">Подробнее</Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}
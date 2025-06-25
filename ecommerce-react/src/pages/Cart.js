import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../context/AppContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useAppContext();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 5, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cart.map(item => (
            <Card key={item.id} sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', maxWidth: '100px', height: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price} each
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      type="number"
                      size="small"
                      InputProps={{ inputProps: { min: 1 } }}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, +e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="h6">
                      ₹{(item.price * item.quantity)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
          <Divider sx={{ my: 3 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">
              Total: ₹{total}
            </Typography>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              color="primary"
              size="large"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { orderAPI } from '../services/api';

export default function Checkout() {
  const { cart, setCart, total } = useAppContext();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every(value => value.trim())) {
      try {
        const orderData = {
          ...form,
          items: cart.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            title: item.title
          })),
          total: total
        };
        await orderAPI.createOrder(orderData);
        setSubmitted(true);
        setShowSuccess(true);
        setCart([]);
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
  };

  return (
    <Box sx={{ p: 5, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      
      {!submitted ? (
        <Paper elevation={3} sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  required
                  multiline
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6">
                    Total: ₹{total || 0}
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={cart.length === 0}
                  >
                    Place Order
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      ) : (
        <Alert severity="success" sx={{ mt: 2 }}>
          <Typography variant="h6">Order placed successfully!</Typography>
          <Typography>Thank you for your purchase. We'll send you an email confirmation shortly.</Typography>
        </Alert>
      )}
      
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        message="Order placed successfully!"
      />
    </Box>
  );
}

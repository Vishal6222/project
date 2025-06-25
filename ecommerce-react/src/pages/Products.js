import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
export default function Products() {
  const { products, loading, error, fetchProducts } = useAppContext();

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4">Shop All</Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <Typography>Loading products...</Typography>
        </Box>
      ) : error ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      ) : products.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <Typography>No products found</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

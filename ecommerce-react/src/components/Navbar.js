import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { cart } = useAppContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand"><h1>DRIPIFY</h1></Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link">Shop</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/order-history">
              Order History
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Box>
        </ul>
      </div>
    </nav>
  );
}

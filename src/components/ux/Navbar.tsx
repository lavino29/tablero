
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import favicon from  '../../images/favicon.png'
import { CardMedia, Link } from '@mui/material';
import logo from '../../images/logo.svg'

export const Navbar = () => {
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
         <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>

        <Box>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <CardMedia
            component="img"
            height="30"
            image={logo}
          />
          </Typography>
        </Box>
          

          <Box  sx={{ flexGrow: 1, display: 'flex', width: "350px" , justifyContent: "space-between"  }}>
          
          <Link component="a"  sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.1rem'}} zIndex="tooltip" underline="none" href="">
            Buscar Mep
          </Link>
    
          <Link component={RouterLink} sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.1rem'}} underline="none" to="/agregar">
        
            Agregar Mep
          </Link>
          <Link component={RouterLink} sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.1rem'}} underline="none" to="/">
         
         Tableros 
       </Link>
          <Link component="a" sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.1rem'}} underline="none" target="_blank" href="">
         
            Salir 
          </Link>
        
      </Box>
      
      </Box>
      <Box sx={{ width:'100%', display:'flex', justifyContent: 'end', alignItems: 'center' }}>
        <Typography sx={{ textAlign: 'center' }}>Sistema de Transferencias MEP</Typography>
        <CardMedia
            component="img"
            sx={{width: '30px', ml: 1}}
            image={favicon}
          />
      </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};


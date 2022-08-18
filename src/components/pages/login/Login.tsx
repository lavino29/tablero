
import React, { useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, CssBaseline } from '@mui/material';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { Container } from '@mui/system';




export const Login = () => {
    const [open, setOpen] = useState<boolean>(false);
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {


    setOpen(false);
  };
  return (
    <Container>
     <CssBaseline />
    <Box sx={{height: '100vh', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Box
        component="form"
        sx={{
          height: "60%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          border: '1px solid black',
          width: "400px"
        }}
        noValidate
        autoComplete="off"
      >
        <p>Ingresa con tu usuario</p>
        <TextField sx={{ color: 'white', m: 1}}  label="Usuario" variant="outlined" />
        <TextField type="password" label="Contraseña" variant="outlined" />
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button sx={{m: 2}} onClick={handleClick} variant="outlined">
            Entrar
          </Button>
   
        </Box>
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Hubo un error al cargar los datos
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  </Container>
  )
}

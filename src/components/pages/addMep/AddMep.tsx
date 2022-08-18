import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, CssBaseline } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { Container } from "@mui/system";
import { Tabla } from "../../../models/Tabla.model.";
import { useDispatch } from "react-redux";
import { addTabla } from "../../../redux/slice/Tabla";

export const AddMep = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState<Tabla>({
    name: "",
    grupo: "",
    status: "Incompleta",
  });
  const dispatch = useDispatch()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    if(value.name ==='' && value.grupo ==='') return
    dispatch(addTabla(value))
    setOpen(true);
  };

  const handleClose = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setOpen(false);
  };
  return (
    <Container>
      <CssBaseline />
      <Box>
        <Box
          component="form"
          sx={{
            height: "70%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <p>Agregar MEP</p>
          <TextField
            value={value.name}
            onChange={handleChange}
            sx={{ color: "white" }}
            label="Nombre"
            variant="outlined"
            name="name"
          />
          <TextField
            value={value.grupo}
            onChange={handleChange}
            type="text"
            label="Grupo"
            variant="outlined"
            name="grupo"
          />
          <FormControl>
            <FormLabel id="status">Estado:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="status"
              value={value.status}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Incompleta"
                control={<Radio />}
                label="Incompleta"
              />
              <FormControlLabel
                value="Completa"
                control={<Radio />}
                label="Completa"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleClick} variant="outlined">
              AGREGAR
            </Button>
          </Box>
        </Box>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Guardado Correctamente!
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </Container>
  );
};

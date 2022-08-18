import React from "react";
import { Button, CssBaseline, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomizedTables from "../../commun/Tablet";
import { useSelector } from "react-redux";
import { AppStore } from "../../../redux";

export const Inicio = () => {
  const { tabla } = useSelector((state: AppStore) => state);

  return (
    <Container>
      <Box sx={{ mt: 3 }}>
        <Paper sx={{ height: "70vh", position: "relative", width: "100%" }}>
          <Box sx={{ position: "absolute", top: "-27px", right: "0" }}>
            <Button sx={{ ml: 1 }} variant="contained">
              Recibidas
            </Button>
            <Button sx={{ ml: 1 }} variant="contained">
              Enviadas
            </Button>
            <Button sx={{ ml: 1 }} variant="contained">
              Esperadas
            </Button>
          </Box>
          <Box>
            <CustomizedTables />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

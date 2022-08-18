import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AddMep } from "../components/pages/addMep/AddMep";
import { Inicio } from "../components/pages/inicio/Inicio";
import { Footer } from "../components/ux/Footer";
import { Navbar } from "../components/ux/Navbar";

export const DashboardRouter = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agregar" element={<AddMep />} />
      </Routes>
      <Footer />
    </Box>
  );
};

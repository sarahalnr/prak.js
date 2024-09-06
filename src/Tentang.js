import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

function Tentang() {
  return (
    <Container>
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1504693346549-cbdefa9bb5ef?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gambar Deskripsi"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Hubungi Kami</Typography>
            <Typography variant="body1">
              Hubungi kami untuk konsultasi gratis atau untuk memesan bunga yang
              indah hari ini. Dengan layanan pengiriman yang cepat dan handal,
              bunga segar kami akan segera sampai di tangan Anda.
              <br />
              <br />
              Alamat: Jl. Gajah Mada No. 123
              <br />
              Telepon: (021) 123-4567
              <br />
              Email: bloomburry@gmail.com
              <br />
              Instagram: @bloomburry.id
              <br />
              Facebook: bloomburry
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Tentang;

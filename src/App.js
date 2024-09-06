import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import logo from "./bloomburry.png";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Produk from "./Produk";
import Tentang from "./Tentang";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", marginRight: "16px" }}
            />
          </Typography>
          <Button component={RouterLink} to="/" color="inherit">
            Beranda
          </Button>
          <Button component={RouterLink} to="/produk" color="inherit">
            Produk
          </Button>
          <Button component={RouterLink} to="/tentang" color="inherit">
            Tentang
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Box mt={5}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <img
                      src="https://images.unsplash.com/photo-1459662784036-fb86bbf1104f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                      alt="Gambar Deskripsi"
                      style={{
                        width: "100%", // Menyesuaikan gambar dengan lebar kontainer
                        maxWidth: "500px", // Mengatur ukuran maksimal gambar
                        height: "auto",
                        display: "block",
                        margin: "0 auto 20px auto", // Menambahkan margin bawah
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h2">
                      Bloomsbury
                    </Typography>
                    <Typography variant="body1">
                      Bunga-bunga indah yang menentang laju waktu yang tak
                      henti-hentinya dan menantang gagasan yang tak terucapkan
                      tentang hadiah yang sementara. Bloomsbury mengkhususkan diri
                      dalam seni pengawetan bunga yang luar biasa dan terencana,
                      praktik yang menarik dengan akar yang menelusuri kembali
                      ke sejarah kuno. Bunga-bunga awetan kami yang dikeringkan
                      dan dirawat dengan hati-hati hadir dalam berbagai bentuk:
                      siluet mungil, toples kaca pedesaan, karangan bunga besar,
                      vas yang canggih, dan kotak-kotak yang unik. Tersedia
                      dalam berbagai warna dan komposisi, sempurna sebagai
                      hiasan utama atau sebagai aksen, bunga-bunga yang kuat ini
                      siap untuk bertahan seumur hidup bersama Anda atau orang
                      spesial Anda.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            }
          />
          <Route path="/produk" element={<Produk />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Container>
      <Box
        component="footer"
        sx={{ bgcolor: "#f5b5d3", color: "#fff", py: 3, mt: "auto" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Alamat
              </Typography>
              <Typography variant="body2">
                Jl. Gajah Mada No. 123
                <br />
                Kota, Batam, Kepulauan Riau
                <br />
                Telepon: (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Typography
                variant="body2"
                component={RouterLink}
                to="/"
                color="white"
              >
                Beranda
                <br />
              </Typography>
              <Typography
                variant="body2"
                component={RouterLink}
                to="produk"
                color="white"
              >
                Produk
                <br />
              </Typography>
              <Typography
                variant="body2"
                component={RouterLink}
                to="tentang"
                color="white"
              >
                Tentang
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Find on Us
              </Typography>
              <Typography variant="body2">
                Facebook: Bloomsbury
                <br />
                Instagram: @Bloomsbury.id
                <br />
                Email: Bloomsbury@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Layout;

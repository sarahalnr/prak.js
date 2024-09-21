import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import logo from "./bloomburry.png";
import {
  Routes,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import Produk from "./Produk";
import Tentang from "./Tentang";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Layout() {
  const location = useLocation(); // Hook untuk mendapatkan rute saat ini

  // Pengaturan slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar position="sticky" sx={{ backgroundColor: "#f5b5d3" }}>
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

      {/* Tampilkan slider dan deskripsi hanya jika berada di beranda */}
      {location.pathname === "/" && (
        <>
          {/* Jumbotron dengan gambar slide */}
          <Slider {...settings}>
            <div>
              <img
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1628927124199-a8a2a5394392?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
              ></img>
            </div>
            <div>
              <img
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1628927122320-910a679f54b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 2"
              ></img>
            </div>
          </Slider>

          <Container>
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
                  <Typography variant="h2">Bloomsbury</Typography>
                  <Typography variant="body1">
                    Bunga-bunga indah yang menentang laju waktu yang tak
                    henti-hentinya dan menantang gagasan yang tak terucapkan
                    tentang hadiah yang sementara. Bloomsbury mengkhususkan diri
                    dalam seni pengawetan bunga yang luar biasa dan terencana,
                    praktik yang menarik dengan akar yang menelusuri kembali ke
                    sejarah kuno. Bunga-bunga awetan kami yang dikeringkan dan
                    dirawat dengan hati-hati hadir dalam berbagai bentuk: siluet
                    mungil, toples kaca pedesaan, karangan bunga besar, vas yang
                    canggih, dan kotak-kotak yang unik. Tersedia dalam berbagai
                    warna dan komposisi, sempurna sebagai hiasan utama atau
                    sebagai aksen, bunga-bunga yang kuat ini siap untuk bertahan
                    seumur hidup bersama Anda atau orang spesial Anda.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      )}

      <Container sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" />
          <Route path="/produk" element={<Produk />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Container>

      {/* Tampilkan Produk Terlaris hanya di halaman beranda */}
      {location.pathname === "/" && (
        <>
          <Typography variant="h4" gutterBottom align="center">
            Produk Terlaris
          </Typography>

          <Grid container spacing={4} sx={{ padding: "20px" }}>
            {/* Produk Pertama */}
            <Grid item xs={12} md={3} sx={{ marginBottom: "20px" }}>
              <Card sx={{ maxWidth: 300, marginTop: "10px", padding: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1455758868660-918531e3a4e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Produk A"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tulip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    tulip surgawi yang berbunga lebih awal dengan bunga besar
                    berwarna putih krem. Umbinya cenderung bertahan lebih lama
                    dari tahun ke tahun, daripada layu setelah satu tahun
                    berbunga seperti banyak kultivar tulip lainnya.
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                >
                  Beli Sekarang
                </Button>
              </Card>
            </Grid>

            {/* Produk Kedua */}
            <Grid item xs={12} md={3} sx={{ marginBottom: "20px" }}>
              <Card sx={{ maxWidth: 300, marginTop: "10px", padding: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1455758868660-918531e3a4e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Produk A"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tulip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    tulip surgawi yang berbunga lebih awal dengan bunga besar
                    berwarna putih krem. Umbinya cenderung bertahan lebih lama
                    dari tahun ke tahun, daripada layu setelah satu tahun
                    berbunga seperti banyak kultivar tulip lainnya.
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                >
                  Beli Sekarang
                </Button>
              </Card>
            </Grid>

            {/* Produk Ketiga */}
            <Grid item xs={12} md={3} sx={{ marginBottom: "20px" }}>
              <Card sx={{ maxWidth: 300, marginTop: "10px", padding: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1455758868660-918531e3a4e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Produk A"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tulip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    tulip surgawi yang berbunga lebih awal dengan bunga besar
                    berwarna putih krem. Umbinya cenderung bertahan lebih lama
                    dari tahun ke tahun, daripada layu setelah satu tahun
                    berbunga seperti banyak kultivar tulip lainnya.
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                >
                  Beli Sekarang
                </Button>
              </Card>
            </Grid>

            {/* Produk Keempat */}
            <Grid item xs={12} md={3} sx={{ marginBottom: "20px" }}>
              <Card sx={{ maxWidth: 300, marginTop: "10px", padding: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1455758868660-918531e3a4e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Produk A"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tulip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    tulip surgawi yang berbunga lebih awal dengan bunga besar
                    berwarna putih krem. Umbinya cenderung bertahan lebih lama
                    dari tahun ke tahun, daripada layu setelah satu tahun
                    berbunga seperti banyak kultivar tulip lainnya.
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                >
                  Beli Sekarang
                </Button>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
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
                to="/produk"
                color="white"
              >
                Produk
                <br />
              </Typography>
              <Typography
                variant="body2"
                component={RouterLink}
                to="/tentang"
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

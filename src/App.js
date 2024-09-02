// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const biodataArray = [
//     { field: "Nama", value: "Sarah Isnaini Alnauri" },
//     { field: "NIM", value: "3312301018" },
//     { field: "Jurusan", value: "Teknik Informatika" },
//     { field: "Universitas", value: "Politeknik Negeri Batam" },
//   ];
//   return (
//     <div>
//       <h2>Biodata Mahasiswa (Tabel)</h2>
//       <table border="1" cellpadding="10">
//         <thead>
//           <tr>
//             <th>Field</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {biodataArray.map((item, index) => (
//             <tr key={index}>
//               <td>{item.field}</td>
//               <td>{item.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

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
import logo from "./logo.svg";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Produk from "./Produk";
import Tentang from "./Tentang";

function Layout() {
  return (
    <div
      style={{ display: "flex", 
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
              style={{ height: "40px", margimRight: "16px" }}
            />
          </Typography>
          <Button component={RouterLink} to="/" color="inherit">
            Beranda
          </Button>
          <Button component={RouterLink} to="/produk" color="inherit">
            Produk
          </Button>
          <Button component={RouterLink} to="/Tentang" color="inherit">
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
                <Typography variant="h4" gutterBottom>
                  Selamat Datang di Website Kami
                </Typography>
              </Box>
            }
          />
          <Route path="/produk" element={<Produk />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </Container>
      <Box
        component="footer"
        sx={{ bgcolor: "#548be3", color: "#fff", py: 3, mt: "auto" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Alamat
              </Typography>
              <Typography variant="body2">
                Jl. Contoh No. 123
                <br />
                Kota, Negara 12345
                <br />
                Telepon: (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Find on Us
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Layout;

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
} from "@mui/material";

function Produk() {
  return (
    <div>
      {/* Judul Produk Kami */}
      <Typography variant="h4" align="center" gutterBottom>
        Produk Kami
      </Typography>

    <Grid container spacing={14} justifyContent="center" alignItems="center" padding={"20px"}>
      {/* Card 1 */}
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 300, marginTop: "20px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1679328735626-534908eeb34e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tulip"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Purissima
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                tulip surgawi yang berbunga lebih awal dengan bunga besar
                berwarna putih krem. Umbinya cenderung bertahan lebih lama dari
                tahun ke tahun, daripada layu setelah satu tahun berbunga
                seperti banyak kultivar tulip lainnya.
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
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 300, marginTop: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1465644714440-4c572259ce2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tulip"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Black Parrot  
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                tulip surgawi yang berbunga lebih awal dengan bunga besar
                berwarna putih krem. Umbinya cenderung bertahan lebih lama dari
                tahun ke tahun, daripada layu setelah satu tahun berbunga
                seperti banyak kultivar tulip lainnya.
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
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 300, marginTop: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1455758868660-918531e3a4e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tulip"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Sylvestris
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                tulip surgawi yang berbunga lebih awal dengan bunga besar
                berwarna putih krem. Umbinya cenderung bertahan lebih lama dari
                tahun ke tahun, daripada layu setelah satu tahun berbunga
                seperti banyak kultivar tulip lainnya.
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
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}

export default Produk;

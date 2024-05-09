import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import "./Home.css";

export const Home: FC = () => {
  return (
    <Box>
      <Box className={"background-image"}></Box>
      <Box className={"title-logo-container"}>
        <img
          src="../../asset/logo.png"
          alt="SpendWise logo"
          className={"title-logo"}
        />
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={"card"}>
            <img
              src="/asset/categories-logo.png"
              alt="Categories"
              className={"card-image"}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
                className={"section-title"}
              >
                Categories
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/categories" variant="contained">
                <Typography>Go to</Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={"card"}>
            <img
              src="/asset/receipt-logo.png"
              alt="Categories"
              className={"card-image"}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
                className={"section-title"}
              >
                Receipts
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/upload-receipt" variant="contained">
                <Typography>Go to</Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

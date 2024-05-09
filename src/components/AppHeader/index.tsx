import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

import "./AppHeader.css";

export const AppHeader: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters className={"menu-container"}>
          <Button color="primary" variant="contained" href="/">
            <Typography className={"home-button-text"}>Home</Typography>
          </Button>
          <Button color="primary" variant="contained" href="/categories">
            <Typography className={"home-button-text"}>Categories</Typography>
          </Button>
          <Button color="primary" variant="contained" href="/upload-receipt">
            <Typography className={"home-button-text"}>
              Upload receipt
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

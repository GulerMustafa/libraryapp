import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        bottom: 0,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Library Project
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{ textDecoration: "none", color: "#000" }}
            >
              {`${new Date().getFullYear()}`} | Mustafa Güler |{" "}
              <a
                href="https://www.linkedin.com/in/gulermustafa/"
                target="blank"
              >
                LinkedIn{" "}
              </a>
              |{" "}
              <a href="https://github.com/GulerMustafa" target="blank">
                Github
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Container } from "@mui/material";

export default function BookCard({ fillData }) {
  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          {fillData &&
            fillData.map((data, index) => (
              <Card sx={{ width: 300, m: 3 }} key={index}>
                <CardMedia
                  height="270"
                  component="img"
                  image={data.volumeInfo.imageLinks.smallThumbnail}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "center" }}
                  >
                    {data.volumeInfo.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{ textAlign: "center" }}
                  >
                    {data.volumeInfo.authors}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {data.volumeInfo.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {data.volumeInfo.subtitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={data.volumeInfo.infoLink}
                    target="_blank"
                  >
                    Preview
                  </Button>
                  <Button size="small">Details</Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Container>
    </>
  );
}

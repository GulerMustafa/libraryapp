import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BookCard({ fillData }) {
  return (
    <>
      {fillData &&
        fillData.map((data, index) => (
          <Card sx={{ maxWidth: 200, mt: 5 }} key={index}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {data.volumeInfo.title}
            </Typography>
            <CardMedia
              height="270"
              component="img"
              image={data.volumeInfo.imageLinks.smallThumbnail}
              title=""
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
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
    </>
  );
}

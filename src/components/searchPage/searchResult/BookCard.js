import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { Container } from "@mui/material";
import ShowBookModal from "./ShowBookModal";

export default function BookCard({ fillData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {fillData &&
          fillData.map((data) => (
            <Grid item sx={{ display: "flex" }}>
              <Card
                raised
                sx={{
                  width: 200,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                }}
                key={data.id}
              >
                <CardMedia
                  height="200"
                  width="100"
                  component="img"
                  image={data?.volumeInfo.imageLinks.thumbnail}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {data?.volumeInfo.authors && data?.volumeInfo.authors[0]}
                  </Typography>
                  <Divider />
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {data?.volumeInfo.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Button
                    size="small"
                    href={data?.volumeInfo.infoLink}
                    target="_blank"
                  >
                    Preview
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedBook(data.id);
                    }}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      {showModal && (
        <ShowBookModal
          fillData={fillData.filter((r) => r.id === selectedBook)}
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </Container>
  );
}

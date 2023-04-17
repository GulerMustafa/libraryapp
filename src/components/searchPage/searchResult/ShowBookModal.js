import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Card,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";

export default function ShowBookModal({ open, onClose, fillData }) {
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center" }} variant="h5">
        Book Details
      </DialogTitle>
      {fillData?.map((data) => (
        <Card
          sx={{
            p: 1,
            backgroundColor: "#D5F5E340",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            marginBottom: 1,
            ":hover": {
              boxShadow: 1,
              backgroundColor: "#c8f5dc",
            },
          }}
        >
          <CardMedia
            height="200"
            width="100"
            component="img"
            image={data?.volumeInfo.imageLinks.thumbnail}
            sx={{ objectFit: "contain" }}
          />
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            {data?.volumeInfo.title}
          </Typography>
          <Grid
            container
            spacing={"10px"}
            sx={{
              textAlign: "center",
            }}
          >
            {data?.volumeInfo.authors === true ||
            data?.volumeInfo.authors != null ? (
              <Grid item xs>
                <Card
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography variant="h6">Author</Typography>
                  <Typography variant="b">
                    {data?.volumeInfo.authors && data?.volumeInfo.authors[0]}
                  </Typography>
                </Card>
              </Grid>
            ) : (
              ""
            )}
            {data?.volumeInfo.categories === true ||
            data?.volumeInfo.categories != null ? (
              <Grid item xs>
                <Card
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography variant="h6">Category</Typography>
                  <Typography variant="b">
                    {data?.volumeInfo.categories}
                  </Typography>
                </Card>
              </Grid>
            ) : (
              ""
            )}
            {data?.volumeInfo.publishedDate === true ||
            data?.volumeInfo.publishedDate != null ? (
              <Grid item xs>
                <Card
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography variant="h6">Page</Typography>
                  <Typography variant="b">
                    {data?.volumeInfo.pageCount}
                  </Typography>
                </Card>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          {data?.volumeInfo.description === true ||
          data?.volumeInfo.description != null ? (
            <>
              {" "}
              <Typography
                variant="h6"
                sx={{ marginBottom: "10px", textAlign: "center", mt: 2 }}
              >
                Description
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginBottom: "10px", textAlign: "justify", p: 3 }}
              >
                {data?.volumeInfo.description}.
              </Typography>{" "}
            </>
          ) : (
            ""
          )}
        </Card>
      ))}

      <DialogActions>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";

export function MoviesAppHeader() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Movies album
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Something about a movies album.
        </Typography>
      </Container>
    </Box>
  );
}

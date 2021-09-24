import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container, Box, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

export function MoviesAppFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "10vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: grey[200],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Footer for my Movies App.</Typography>
        </Container>
      </Box>
    </Box>
  );
}

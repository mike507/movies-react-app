import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageNext, pagePrevious } from "./pageSlice";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";

export function FormPages(props) {
  const { firstElementIndex, lastElementIndex, numberElements, numberPages } =
    props;
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.page);
  const theme = useTheme();
  const maxSteps = numberPages;

  //flexDirection="row" sx={{margin: '20px'}}
  return (
    <Grid container justifyContent="start">
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          sx={{
            m: 2,
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            height: 40,
            bgcolor: "background.default",
          }}
        >{`Elements ${
          firstElementIndex + 1
        }-${lastElementIndex} of ${numberElements}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={page - 1}
          sx={{
            m: 2,
            display: "flex",
            alignItems: "center",
            height: 40,
            bgcolor: "background.default",
          }}
          nextButton={
            <Button
              size="small"
              onClick={() => dispatch(pageNext())}
              disabled={page === maxSteps}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={() => dispatch(pagePrevious())}
              disabled={page === 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
}

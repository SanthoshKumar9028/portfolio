import { Box, Button, Container, Typography, styled } from "@mui/material";
import { FC } from "react";
import waterFlowImg from "../../assets/water-flow-img.png";
import { Download } from "@mui/icons-material";

const SectionRoot = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "30vh",
  [theme.breakpoints.up("md")]: {
    minHeight: "50vh",
  },
  "& .banner__img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateX(180deg)",
  },
  "& .banner__intro": {
    zIndex: 1,
  },
  "& .banner__name": {
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const Banner: FC = () => {
  return (
    <SectionRoot>
      <img className="banner__img" src={waterFlowImg} alt="" />
      <Container className="banner__intro">
        <Typography variant="h4" component="p" fontWeight="bold">
          HELL0
        </Typography>
        <Typography
          className="banner__name"
          variant="h3"
          component="p"
          fontWeight="bold"
        >
          I AM SANTHOSHKUMAR
        </Typography>
        <Typography variant="h5" component="p" fontWeight="bold">
          FRONT END DEVELOPER
        </Typography>
        <Box mt={3}>
          <Button variant="contained" endIcon={<Download />}>
            RESUME
          </Button>
        </Box>
      </Container>
    </SectionRoot>
  );
};

export default Banner;

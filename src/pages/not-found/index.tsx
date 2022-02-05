import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

const NotFound: FC = () => (
  <Box
    component="div"
    sx={{
      display: "grid",
      placeItems: "center center",
      marginTop: "20%",
    }}
  >
    <Typography variant="h4" gutterBottom component="div">
      Word not found
    </Typography>
    <Button
      component={Link}
      to={ROUTES.HOME}
      variant="contained"
      color="primary"
    >
      Go back
    </Button>
  </Box>
);

export default NotFound;

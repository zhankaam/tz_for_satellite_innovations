import { Box, CircularProgress } from "@mui/material";
import React, { FC } from "react";
import { useTypedSelector } from "../../store";

const Loader: FC = () => {
  const isFetching = useTypedSelector(({ results }) => results.isFetching);

  return (
    <>
      {isFetching && (
        <Box sx={{ textAlign: "center", marginTop: "60px" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Loader;

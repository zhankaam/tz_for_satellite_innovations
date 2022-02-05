import { Snackbar, Alert } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { setError } from "../../store/modules/result/action-creator";

export function ErrorSnackbar() {
  const error = useTypedSelector(({ results }) => results.error);
  const dispatch = useDispatch();

  const handleClose = (
    event?: React.SyntheticEvent<any> | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setError(null));
  };

  return (
    <Snackbar
      open={error !== null}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
}

import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Container, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ROUTES from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const onSearchClick = () => {
    history(ROUTES.HOME + keyword);
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ marginTop: "20px" }}>
        <Box>
          <TextField
            label="Search"
            type="search"
            variant="outlined"
            sx={{ minWidth: 500 }}
            value={keyword}
            onChange={onSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={onSearchClick} disabled={!keyword}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

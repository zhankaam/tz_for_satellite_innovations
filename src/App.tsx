import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import ROUTES from "./constants/routes";
import Result from "./pages/result";

const App: FC = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.HOME + ":word"} element={<Result />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

import React from "react";
import Table from "./components/TableData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewData from "./components/ViewData";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/viewdata/:id" element={<ViewData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

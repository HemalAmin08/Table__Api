import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
// import { textAlign } from "@mui/system";

export default function TableData() {
  const [jsonData, setJsonData] = useState([]);
  const [count, setCount] = useState(10);

  const handleData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  };

  useEffect(() => {
    handleData();
  }, []);
  // console.log(jsonData.slice(0, 10), "jsonData");
  // console.log(count - 10, count, "count");
  return (
    <>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jsonData.slice(count - 10, count).map(({ id, title, body }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {title}
                  </TableCell>
                  <TableCell align="left">{body}</TableCell>
                  <TableCell>
                    <Link to={`/viewData/${id}`}>
                      <Button variant="contained">View</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Range</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              onChange={(event, child) => {
                // console.log(event, "====", child);
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>

          <Pagination
            count={Math.ceil(jsonData.length / 10)}
            color="primary"
            onChange={(_, page) => {
              setCount(page * 10);
            }}
          />
        </Box>
      </Container>
    </>
  );
}

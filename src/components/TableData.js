import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { textAlign } from "@mui/system";

export default function TableData() {
  const [jsonData, setJsonData] = useState([]);
  // const limit = 10;

  const handleData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      // .then((json) => json.map(({ id }) => id))
      .then((data) => setJsonData(data));
  };

  useEffect(() => {
    handleData();
    // handlePromise("riddhi");
  }, []);
  console.log(jsonData.slice(0, 10), "jsonData");
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
              {jsonData.slice(0, 10).map(({ id, title, body }) => (
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
        <Pagination
          count={Math.ceil(jsonData.length / 10)}
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            margin: 5,
          }}
        />
      </Container>
    </>
  );
}

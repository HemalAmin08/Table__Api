import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewData() {
  const [singleData, setSingleData] = useState([]);
  let { id } = useParams();
  // console.log(singleData, "singledata");

  const viewData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleData(data));
  };

  useEffect(() => {
    viewData();
  }, []);

  return (
    <>
      <h4>id: {singleData.id}</h4>
      <br />
      <h4>title: {singleData.title}</h4>
      <br />
      <h4>body: {singleData.body}</h4>
    </>
  );
}

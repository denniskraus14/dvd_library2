import React, { useEffect, useState } from "react";
import PaginationTable from "./PaginationTable.js";

export default function TableWithAPI() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setCells(data);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "title" // accessor is the "key" in the data
      },
      {
        Header: "description",
        accessor: "description"
      },
      {
        Header: "Ingredients",
        accessor: "ingredients"
      }
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);
  const data = React.useMemo(() => cells, []);

  return <>{cells && <PaginationTable columns={columns} data={data} />}</>;
}
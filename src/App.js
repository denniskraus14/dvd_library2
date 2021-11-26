import logo from './logo.svg';
import './App.css';
import React from "react";
import SortedTable from './components/SortingTable.js';
import FilterTable from './components/FilterTable.js';
import TableWithAPI from './components/TableWithAPI.js';


function App() {

const columns = React.useMemo(
    () => [
      {
        Header: "Company",
        accessor: "company" // accessor is the "key" in the data
      },
      {
        Header: "Contact",
        accessor: "contact"
      },
      {
        Header: "Country",
        accessor: "country"
      }
    ],
    []
  );
const data = React.useMemo(
    () => [
      {
        company: "Alfred",
        contact: "Maria Anders",
        country: "Germany"
      },
      {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
      },
      {
        company: "Ernst Handel",
        contact: "Roland Mendel	",
        country: "Austria"
      }
    ],
    []
  );
 return (
    <div className="App">
      {/*   <PaginationTable columns={columns} data={cells} /> */}
      {<TableWithAPI />}
    </div>
  );
}

export default App;

import * as React from "react";
import Box from "@mui/material/Box";
import PersonIcon from '@mui/icons-material/Person';
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
  },
];

export default function CustomDataTable() {
  //fetching data from json server

  const [data, setData] = React.useState([]);
  const getData = () => {
    fetch("http://localhost:8000/rows")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJsonfile) {
        setData(myJsonfile);
      })
      .catch((e) => {
        console.log("error");
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
   
    <button  starticon={<PersonIcon/>}>hanan</button>
    
    <Box
      sx={{
        height: "360px",
        width: "100%",
        margin: "0 auto",
        
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    </>
  );
}

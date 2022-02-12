import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const UserGrid = (props) => {
  const {users}=props;
  
  
  const [columnDefs] = useState([
    { field: "id",sortable:true,filter:true },
    { field: "name",sortable:true,filter:true },
    { field: "email",sortable:true,filter:true },
  ]);

  return (
    <div>
      <h2>Users</h2>      
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact rowData={users} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
};

export default UserGrid;

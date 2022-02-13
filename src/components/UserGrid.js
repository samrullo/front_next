import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const UserGrid = (props) => {
  const { users } = props;
  const onCellChanged = async (params) => {
    console.log(
      "oldValue is " + params.oldValue + " , new value is " + params.newValue
    );
    console.log("row data is " + params.data);
    console.log("row data id is " + params.data.id);
    console.log("column changed is " + params.column);
    const response = await fetch("/api/users/edit", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: params.data.id,
        name: params.data.name,
        email: params.data.email,
      }),
    });
    const user_json = await response.json();
    props.setMessage("updated user to " + user_json);
  };

  const [columnDefs] = useState([
    { field: "id", sortable: true, filter: true },
    {
      field: "name",
      sortable: true,
      filter: true,
      editable: true,
      onCellValueChanged: onCellChanged,
    },
    {
      field: "email",
      sortable: true,
      filter: true,
      editable: true,
      onCellValueChanged: onCellChanged,
    },
  ]);

  return (
    <div>
      <h2>Users</h2>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={users} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
};

export default UserGrid;

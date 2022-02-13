import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const UserGrid = (props) => {
  const { users } = props;
  const gridRef = useRef(null);

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
    { field: "id", sortable: true, filter: true, checkboxSelection: true },
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

  const showSelectedNodes = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringRep = selectedData
      .map((node) => `${node.name} ${node.email}`)
      .join(", ");
    console.log(selectedDataStringRep);
    return selectedData;
  };

  const removeSelectedNodes = (e) => {
    const selectedData = showSelectedNodes(e);
    selectedData.map(async (node) => {
      const response = await fetch("/api/users/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: node.id,
          name: node.name,
          email: node.email,
        }),
      });
      const response_json = await response.json();
      console.log("response json after removing " + response_json["message"]);
      props.setMessage(response_json["message"]);
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={showSelectedNodes}>Selected nodes</button>
      <button onClick={removeSelectedNodes}>Remove Selected nodes</button>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowData={users}
          columnDefs={columnDefs}
          rowSelection="multiple"
        ></AgGridReact>
      </div>
    </div>
  );
};

export default UserGrid;

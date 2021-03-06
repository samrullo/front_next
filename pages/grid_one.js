import { AgGridReact } from "ag-grid-react"
import { useState } from "react";

export default function GridOne(props){
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);
 
    const [columnDefs] = useState([
        { field: "make",sortable:true,filter:true },
        { field: "model",sortable:true,filter:true },
        { field: "price",sortable:true,filter:true },
    ]);     

    return <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact></div>
 
}
const onCellChanged = async (params, api_path, setMessage) => {
  console.log(
    "oldValue is " + params.oldValue + " , new value is " + params.newValue
  );
  console.log("row data is " + params.data);
  console.log("row data id is " + params.data.id);
  console.log("column changed is " + params.column);
  const response = await fetch(api_path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prams.data),
  });
  const response_json = await response.json();
  setMessage("updated data to " + response_json);
};

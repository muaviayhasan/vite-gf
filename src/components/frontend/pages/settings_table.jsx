import React, { Component } from "react";
import MaterialTable from "material-table";

const MaterialTableDemo = props => {
  const [state, setState] = React.useState({
    columns: props.columns,
    data: [
      { name: "Mehmet", email: "Shahzad@gmail.com" },
      { name: "Shahzad", email: "Baran1" }
    ]
  });

  return (
    <MaterialTable
      title={`${props.title} Table`}
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: "add",
          tooltip: `Add ${props.title}`,
          isFreeAction: true,
          onClick: event => alert("You want to add a new row")
        },
        {
          icon: "edit",
          tooltip: `Edit ${props.title}`,
          onClick: (event, rowData) => alert("You want to delete " + rowData.id)
        },
        {
          icon: "delete",
          tooltip: `Delete ${props.title}`,
          onClick: (event, rowData) => alert("You want to delete " + rowData.id)
        }
      ]}
    />
  );
};

export default MaterialTableDemo;

import {
    List,
    Datagrid,
    TextField,
    EmailField,
  } from "react-admin";

export const SaleList = () => {
  return (
    <List>
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="first_name" />
          <TextField source="last_name" />
          <EmailField source="email" />
        </Datagrid>
      </List>
  )
}

import { Show, SimpleShowLayout, TextField, DateField } from "react-admin"


export const ProcessShow = () => {
  return (
      <Show >
          <SimpleShowLayout sx={{width:"500px"}}>
              <TextField source="id" label="ID"/>
              <TextField source="process_name" label="Наименование цеха"/>
              <TextField source="process_code" label="Аббривиатура" />
              <DateField source="created_at"/>
          </SimpleShowLayout>
    </Show>
  )
}

import { Show, SimpleShowLayout, TextField, DateField } from "react-admin"


export const PlantsShow = () => {
  return (
      <Show >
          <SimpleShowLayout sx={{width:"500px"}}>
              <TextField source="id" label="ID"/>
              <TextField source="name" label="Наименование цеха"/>
              <TextField source="abbr" label="Аббривиатура" />
              <DateField source="created_at"/>
          </SimpleShowLayout>
    </Show>
  )
}

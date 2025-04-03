import { Show, SimpleShowLayout, TextField, DateField } from "react-admin"


export const PlantsShow = () => {
  return (
      <Show >
          <SimpleShowLayout sx={{width:"500px"}}>
              <TextField source="id" label="ID"/>
              <TextField source="plant_name" label="Наименование цеха"/>
              <TextField source="plant_abbr" label="Аббривиатура" />
              <DateField source="created_at"/>
          </SimpleShowLayout>
    </Show>
  )
}

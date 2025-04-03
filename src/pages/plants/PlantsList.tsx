
import { List, Datagrid, TextField } from 'react-admin'

export const PlantsList = () => {
  return (
      <List sx={{width:"1000px"}}>
          <Datagrid >
              <TextField source="id" label="ID"/>
              <TextField source="plant_name" label="Наименование цеха"/>
              <TextField source="plant_abbr" label="Аббривиатура"/>
          </Datagrid>
    </List>
  )
}


import { List, Datagrid, TextField } from 'react-admin'

export const PlantsList = () => {
  return (
      <List sx={{width:"1000px"}}>
          <Datagrid >
              <TextField source="id" label="ID"/>
              <TextField source="name" label="Наименование цеха"/>
              <TextField source="abbr"label="Аббривиатура"/>
          </Datagrid>
    </List>
  )
}

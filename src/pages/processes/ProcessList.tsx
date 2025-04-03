
import { List, Datagrid, TextField } from 'react-admin'

export const ProcessList = () => {
  return (
      <List sx={{width:"1000px"}}>
          <Datagrid >
              <TextField source="id" label="ID"/>
              <TextField source="process_name" label="Наименование процесса"/>
              <TextField source="process_code"label="Код поцесса"/>
          </Datagrid>
    </List>
  )
}

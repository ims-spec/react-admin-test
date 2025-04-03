
import { List, Datagrid, TextField } from 'react-admin'

export const ProcessList = () => {
  return (
      <List sx={{width:"1000px"}}>
          <Datagrid sx={{
              '& .RaDataGrid-row':{
                  backgroundColor:'#eeb4b4',
                  '&:hover': {
                      backgroundColor:'#5ea128',
                  }
              }
          }}>
              <TextField source="id" label="ID"/>
              <TextField source="process_name" label="Наименование процесса"/>
              <TextField source="process_code" label="Код поцесса"/>
          </Datagrid>
    </List>
  )
}

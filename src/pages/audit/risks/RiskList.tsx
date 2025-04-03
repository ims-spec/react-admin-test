import {Datagrid, List, TextField} from "react-admin";


const RiskList = () => {
    return (
        <List>
            <Datagrid sx={{width: "800px"}}>
                <TextField source="id" label="ID"/>
                <TextField source="category_name" label="Наименование стандарта"/>
            </Datagrid>
        </List>
    );
};

export default RiskList;
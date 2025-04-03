import {DateField, Show, SimpleShowLayout, TextField} from "react-admin";

const RiskShow = () => {
    return (
        <Show>
            <SimpleShowLayout sx={{width: "500px"}}>
                <TextField source="id" label="ID"/>
                <TextField source="category_name" label="Наименование стандарта"/>
                <DateField source="created_at"/>
            </SimpleShowLayout>
        </Show>
    );
};

export default RiskShow;
import {DateField, Show, SimpleShowLayout, TextField} from "react-admin";

export const RisksCategoriesShow = () => {
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



import {Create, SimpleForm, TextInput} from "react-admin";

export const RisksCategoriesCreate = () => {
    return (
        <Create>
            <SimpleForm sx={{width: "500px"}}>
                <TextInput source="category_name" label="Наименование стандарта"/>
            </SimpleForm>
        </Create>
    );
};


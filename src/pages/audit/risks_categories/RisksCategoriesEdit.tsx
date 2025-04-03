import {Edit, SimpleForm, TextInput} from "react-admin";


export const RisksCategoriesEdit = () => {
    return (
        <Edit>
            <SimpleForm sx={{width: "500px"}}>
                <TextInput source="category_name" label="Наименование стандарта"/>
            </SimpleForm>
        </Edit>
    );
};


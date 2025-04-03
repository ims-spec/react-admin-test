import {Edit, SimpleForm, TextInput} from "react-admin";


const RiskEdit = () => {
    return (
        <Edit>
            <SimpleForm sx={{width: "500px"}}>
                <TextInput source="category_name" label="Наименование стандарта"/>
            </SimpleForm>
        </Edit>
    );
};

export default RiskEdit;
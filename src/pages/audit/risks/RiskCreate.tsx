import {Create, SimpleForm, TextInput} from "react-admin";


const RiskCreate = () => {
    return (
        <Create>
            <SimpleForm sx={{width: "500px"}}>
                <TextInput source="category_name" label="Наименование стандарта"/>
            </SimpleForm>
        </Create>
    );
};

export default RiskCreate;
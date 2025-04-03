import { Create, SimpleForm, TextInput } from "react-admin";

export const PlantsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="plant_name" label="Имя цеха"/>
        <TextInput source="plant_abbr" label="Аббривиатура"/>
      </SimpleForm>
    </Create>
  );
};

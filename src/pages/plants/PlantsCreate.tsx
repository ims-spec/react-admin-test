import { Create, SimpleForm, TextInput } from "react-admin";

export const PlantsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Имя цеха"/>
        <TextInput source="abbr" label="Аббривиатура"/>
      </SimpleForm>
    </Create>
  );
};

import { Edit, SimpleForm, TextInput } from "react-admin";

export const PlantsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

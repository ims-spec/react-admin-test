import { Edit, SimpleForm, TextInput } from "react-admin";

export const PlantsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="plant_name" />
        <TextInput source="plant_abbr" />
      </SimpleForm>
    </Edit>
  );
};

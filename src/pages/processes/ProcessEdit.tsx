import { Edit, SimpleForm, TextInput } from "react-admin";

export const ProcessEdit = () => {
  return (
    <Edit sx={{width:"600px"}}>
      <SimpleForm>
        <TextInput source="process_name" />
        <TextInput source="process_code" />
      </SimpleForm>
    </Edit>
  );
};

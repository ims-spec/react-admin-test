import { Create, SimpleForm, TextInput } from "react-admin";

export const ProcessCreate = () => {
  return (
    <Create sx={{width:"600px"}}>
      <SimpleForm>
        <TextInput source="process_name" label="Имя процесса"/>
        <TextInput source="process_code" label="Код процесса"/>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EmailId" source="emailId" type="email" />
        <TextInput label="MobileNumber" source="mobileNumber" />
      </SimpleForm>
    </Create>
  );
};

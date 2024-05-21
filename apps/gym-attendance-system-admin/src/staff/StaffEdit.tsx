import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="EmailId" source="emailId" type="email" />
        <TextInput label="MobileNumber" source="mobileNumber" />
      </SimpleForm>
    </Edit>
  );
};

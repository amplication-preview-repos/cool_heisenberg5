import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StaffWhereInput = {
  emailId?: StringNullableFilter;
  id?: StringFilter;
  mobileNumber?: StringNullableFilter;
};

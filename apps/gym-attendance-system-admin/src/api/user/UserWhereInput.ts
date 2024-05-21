import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  emailId?: StringNullableFilter;
  id?: StringFilter;
  mobileNumber?: StringNullableFilter;
};

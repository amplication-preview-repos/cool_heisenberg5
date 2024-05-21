import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "mobileNumber";

export const UserTitle = (record: TUser): string => {
  return record.mobileNumber?.toString() || String(record.id);
};

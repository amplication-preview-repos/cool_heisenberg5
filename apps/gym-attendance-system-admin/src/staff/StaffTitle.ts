import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "mobileNumber";

export const StaffTitle = (record: TStaff): string => {
  return record.mobileNumber?.toString() || String(record.id);
};

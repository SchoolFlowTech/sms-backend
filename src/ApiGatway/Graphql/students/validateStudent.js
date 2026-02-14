import { failed } from "../../utils/response.js";

export const validateStudent = (data) => {

  if (!data.firstName || data.firstName.trim() === "") {
    return failed("First name is required");
  }

  if (!data.gender) {
    return failed("Gender is required");
  }

  if (!data.dateOfBirth) {
    return failed("Date of birth is required");
  }

  if (!data.mobileNumber) {
    return failed("mobile number is required");
  }

  if (data.mobileNumber.length < 10) {
    return failed("mobile number must be at least 10 digits");
  }

  if (!data.class) {
    return failed("Class is required");
  }

  if (!data.section) {
    return failed("Section is required");
  }

  if (!data.status) {
    return failed("Status is required");
  }

  return data;
};

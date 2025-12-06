export const validateStudent = (data) => {

  if (!data.firstName || data.firstName.trim() === "") {
    throw new Error("First name is required");
  }

  if (!data.gender) {
    throw new Error("Gender is required");
  }

  if (!data.dateOfBirth) {
    throw new Error("Date of birth is required");
  }

  if (!data.mobileNumber) {
    throw new Error("mobile number is required");
  }

  if (data.mobileNumber.length < 10) {
    throw new Error("mobile number must be at least 10 digits");
  }

  if (!data.class) {
    throw new Error("Class is required");
  }

  if (!data.section) {
    throw new Error("Section is required");
  }

  if (!data.status) {
    throw new Error("Status is required");
  }

  return data;
};

export const validEmailRegex = RegExp(
  /^(([^<>()\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const validatePassword = (name, password) => {
  const isEqual = isNameEqualPassword(name, password);

  if (password.length < 7 && !isEqual) {
    return "Password must be at least 7 characters long!";
  }
  if (password.trim().length < 7 && !isEqual) {
    return "Password must not be only with spaces!";
  }
  if (isEqual) {
    return "The password and nickname must not be equal!";
  }

  return "";
};

export const validateNickname = (name, password) => {
  const isEqual = isNameEqualPassword(name, password);

  if (name.length < 5 && !isEqual) {
    return "The nickname length must be greater that 4";
  }
  if (isEqual) {
    return "The password and nickname must not be equal!";
  }

  return "";
};

export const validateForm = (errors) => {
  let isValid = true;

  Object.values(errors).forEach((val) => val.length > 0 && (isValid = false));

  return isValid;
};

const isNameEqualPassword = (name, password) => {
  if (name.toLowerCase() === password.toLowerCase()) {
    return true;
  }
  return false;
};

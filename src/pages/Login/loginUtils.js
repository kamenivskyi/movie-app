export const getErrorMessage = (errorObj) => {
  if (errorObj.code) {
    switch (errorObj.code) {
      case "auth/wrong-password":
        return "The password is invalid!";
      case "auth/user-not-found":
        return "The user does not exist!";
      default:
        return errorObj.message;
    }
  }

  return null;
};

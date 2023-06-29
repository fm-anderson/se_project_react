const LoginValidation = (email, password) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email) &&
    password.length >= 4
  );
};

const SignUpValidation = (email, password, name) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email) &&
    password.length >= 4 &&
    name.length > 2
  );
};

const NewItemValidation = (itemName, itemLink, weatherType) => {
  return (
    itemName.length > 0 &&
    itemLink.length > 0 &&
    ['Hot', 'warm', 'cold'].includes(weatherType)
  );
};

const UpdateProfileValidation = (name, avatar) => {
  return name.length > 2 && avatar.length > 2;
};

export {
  LoginValidation,
  SignUpValidation,
  NewItemValidation,
  UpdateProfileValidation,
};

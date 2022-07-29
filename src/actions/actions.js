export const setName = (name) => {
  return {
    type: "registration/setName",
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: "registration/setEmail",
    payload: email,
  };
};

export const setPhone = (phone) => {
  return {
    type: "registration/setPhone",
    payload: phone,
  };
};

export const setPositionId = (id) => {
  return {
    type: "registration/setPositionId",
    payload: id,
  };
};

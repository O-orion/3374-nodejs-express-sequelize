/* eslint-disable linebreak-style */
module.exports = (cpf) => {
  if (cpf.length !== 11) {
    return true;
  } else {
    return false;
  }
};

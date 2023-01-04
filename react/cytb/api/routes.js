const fs = require("fs");
const {
  getPublicKey,
  login,
  register,
  profileInfoToken,
} = require("./database/sqllite");

// тут все функции на возвраты в роуты
const indexRoute = (res) => {
  fs.readFile("README.md", (err, data) => {
    res.send(data.toString("utf-8"));
  });
};
const getPublicKeyRoute = (res) => getPublicKey(res);
const loginRoute = (res, data) => login(res, data);
const registerRoute = (res, data) => register(res, data);
const profileInfoRoute = (res, data) => profileInfoToken(res, data);

module.exports = {
  indexRoute,
  getPublicKeyRoute,
  loginRoute,
  registerRoute,
  profileInfoRoute,
};

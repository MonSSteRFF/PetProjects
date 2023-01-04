require("dotenv").config();

const {
  createUnicToken,
  getNewKeyPair,
  passwordPrivateDecrypt,
  passwordPublicEncrypt,
  privateDecrypt,
  publicEncryptPrivateDecrypt,
} = require("./crypto");

const { publicKey, privateKey } = getNewKeyPair();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./databse.sqlite");

const privatePassKey = process.env.DATA_PRIVATE_KEY;
const publicPassKey = process.env.DATA_PUBLIC_KEY;

const getPublicKey = (res) => {
  res.send(publicKey);
};

const login = (res, encryptLoginData) => {
  const data = privateDecrypt(privateKey, encryptLoginData.data);
  db.get(
    `SELECT password, token
     FROM users
     WHERE login = '${data.login}'`,
    [],
    (err, user) => {
      const decryptPass =
        user !== undefined
          ? passwordPrivateDecrypt(privatePassKey, user.password)
          : undefined;
      const decryptNewPass = publicEncryptPrivateDecrypt(
        publicPassKey,
        privatePassKey,
        data.password
      );

      res.send(
        decryptPass === decryptNewPass
          ? JSON.stringify({
              isLogin: true,
              token: user.token,
            })
          : JSON.stringify({
              isLogin: false,
            })
      );
    }
  );
};

const register = (res, encryptData) => {
  const data = privateDecrypt(privateKey, encryptData.data);

  db.serialize(() => {
    db.all(
      `SELECT *
       FROM users
       WHERE email = '${data.email}'
          or login = '${data.login}'`,
      [],
      (err, rows) => {
        if (rows.length !== 0) {
          res.send(
            JSON.stringify({
              isLogin: false,
              error: "email or username has already used",
            })
          );
          return false;
        } else {
          db.all(
            `SELECT count(*)
             FROM users`,
            [],
            (err, rows) => {
              const newId = rows[0]["count(*)"] + 1;

              const cryptoPass = passwordPublicEncrypt(
                publicPassKey,
                data.password
              );

              const token = createUnicToken(
                JSON.stringify({
                  name: data.name,
                  login: data.login,
                  password: data.password,
                  email: data.email,
                  id: newId,
                  random: (Math.random() * 100000).toFixed(0),
                })
              );

              db.run(
                `INSERT INTO users(name, login, password, email, id, token)
                 VALUES ('${data.name}', '${data.login}', '${cryptoPass}', '${data.email}', '${newId}', '${token}')`
              );

              res.send(
                JSON.stringify({
                  isLogin: true,
                  token: token,
                })
              );
              return true;
            }
          );
        }
      }
    );
  });
};

const profileInfoToken = (res, data) => {
  if (data.data !== undefined) {
    db.get(
      `SELECT login, name, tags, id, telegramid, email
       FROM users
       WHERE token = "${data.data}"`,
      [],
      (err, userData) => {
        res.send(
          JSON.stringify({
            isLogin: true,
            userData: userData,
          })
        );
      }
    );
  } else {
    res.send(
      JSON.stringify({
        isLogin: false,
      })
    );
  }
};

const profileInfoTelegram = (telegramid, callback) => {
  db.get(
    `SELECT username, tags, id, email, token
     FROM users
     WHERE telegramid = ${telegramid}`,
    [],
    (err, userData) => {
      callback(userData);
    }
  );
};

const registerTelegramId = (telegramid, token, callback) => {
  db.all(
    `SELECT telegramid
     FROM users
     WHERE token = "${token}"`,
    [],
    (err1, rows) => {
      if (rows.length === 0) {
        callback(err1, rows, 100);
      } else {
        if (rows[0]?.telegramid === null || rows[0]?.telegramid === undefined) {
          db.run(
            `UPDATE users
             SET telegramid = "${telegramid}"
             WHERE token = "${token}"`,
            [],
            (err, res) => {
              if (err !== null || res !== undefined) {
                console.error(
                  "Error: " + err + "\n" + "Response: " + res + "\n"
                );
              }
              db.get(
                `SELECT token
                 FROM users
                 WHERE telegramid = "${telegramid}"`,
                [],
                (error, response) => {
                  callback(error, response, 0);
                }
              );
            }
          );
        } else {
          callback(err1, rows, 200);
        }
      }
    }
  );
};

module.exports = {
  login,
  register,
  getPublicKey,
  profileInfoToken,
  profileInfoTelegram,
  registerTelegramId,
};

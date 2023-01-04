const crypto = require("crypto");
// файл с функциями на шифрацию и дешифрацию

const createUnicToken = (STR) =>
  crypto.createHmac("sha256", process.env.SECRET_KEY).update(STR).digest("hex");

const getNewKeyPair = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "",
    },
  });

  return { publicKey, privateKey };
};

const passwordPrivateDecrypt = (privatePassKey, password) =>
  crypto
    .privateDecrypt(
      {
        key: privatePassKey,
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(password, "base64")
    )
    .toString("base64");

const passwordPublicEncrypt = (publicPassKey, password) =>
  crypto
    .publicEncrypt(
      {
        key: publicPassKey,
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(password, "base64")
    )
    .toString("base64");

const privateDecrypt = (privateKey, encryptData) =>
  JSON.parse(
    crypto
      .privateDecrypt(
        {
          key: privateKey,
          passphrase: "",
          padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        Buffer.from(encryptData, "base64")
      )
      .toString("utf8")
  );

const publicEncryptPrivateDecrypt = (publicPassKey, privatePassKey, password) =>
  crypto
    .privateDecrypt(
      {
        key: privatePassKey,
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(
        crypto
          .publicEncrypt(
            {
              key: publicPassKey,
              passphrase: "",
              padding: crypto.constants.RSA_PKCS1_PADDING,
            },
            Buffer.from(password, "base64")
          )
          .toString("base64"),
        "base64"
      )
    )
    .toString("base64");

module.exports = {
  createUnicToken,
  getNewKeyPair,
  passwordPrivateDecrypt,
  passwordPublicEncrypt,
  privateDecrypt,
  publicEncryptPrivateDecrypt,
};

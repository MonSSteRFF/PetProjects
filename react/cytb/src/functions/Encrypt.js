import {JSEncrypt}  from "jsencrypt"

const Encrypt = (encData, publicKey) => {
  const encrypt = new JSEncrypt();

  encrypt.setPublicKey(publicKey);

  return encrypt.encrypt(encData);
};

export default Encrypt;

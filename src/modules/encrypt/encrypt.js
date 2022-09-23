const openpgp = require("openpgp");

class Encrypt {
  constructor() {}

  async encryptWithPublicKey(info) {
    if (
      info.encryptedValue &&
      info.encryptedValue.publicKey &&
      info.encryptedValue.keyId &&
      info.cardInfo &&
      info.cardInfo.number &&
      info.cardInfo.cvv
    ) {
      const decodedPublicKey = await openpgp.readKey({
        armoredKey: atob(info.encryptedValue.publicKey),
      });

      const encryptedData = await openpgp.encrypt({
        message: await openpgp.createMessage({
          text: JSON.stringify(info.cardInfo),
        }), // input as Message object
        encryptionKeys: decodedPublicKey,
      });

      var response = {
        encryptedData,
        keyId: info.encryptedValue.keyId,
      };
      console.log("Encryt:", response);

      return response;
    } else {
      return {
        error: "publicKey and cardInfo are required",
      };
    }
  }
}


exports.Encrypt = Encrypt;

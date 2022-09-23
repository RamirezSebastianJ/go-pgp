const { Router } = require("express");
const { Encrypt } = require("../../modules/encrypt/encrypt");
const router = Router();

router.get("/", (req, res) => {
  console.log("GoPgp");
  res.json({ api: "GoPgp" });
});

router.post("/encrypt", async (req, res) => {
  console.log("GoPgp", req.body);
  var encrypt = new Encrypt();
  var response = await encrypt.encryptWithPublicKey(req.body);
  if(response.error){
    res.status(500);
  }else{

  }
  res.json(response);
});

module.exports = router;

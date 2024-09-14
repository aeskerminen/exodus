const router = require("express").Router();

router.post("/rentalAssignment", (req, res) => {
  const body = req.body;
  console.log(body);
});

module.exports = router;

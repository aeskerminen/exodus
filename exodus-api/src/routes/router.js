const router = require("express").Router();
const client = require("../database");

router.post("/rentalAssignment", (req, res) => {
  const body = req.body;
  console.log(body);

  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");

      client.query("SELECT * FROM RENTAL_ASSIGNMENTS", (err, result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          console.log("Query result:", result.rows);
        }

        client
          .end()
          .then(() => {
            console.log("Connection to PostgreSQL closed");
          })
          .catch((err) => {
            console.error("Error closing connection", err);
          });
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
});

module.exports = router;

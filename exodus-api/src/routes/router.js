const router = require("express").Router();
const client = require("../database");

router.post("/rentalAssignment", (req, res) => {
  const body = req.body;
  console.log(body);

  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");

      const query_text =
        "INSERT INTO rental_assignments(customer_name, begin_date, end_date, amount_boxes) VALUES ($1, $2, $3, $4) RETURNING *";
      const query_values = [
        body.name,
        body.dateOfRental,
        body.dateOfReturn,
        body.numberOfBoxes,
      ];

      client.query(query_text, query_values, (err, result) => {
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

        return res.status(200).json(result.rows[0]).end();
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
});

module.exports = router;

const router = require("express").Router();
const client = require("../database");

const pool = require("../database");

router.get("/rentalAssignments", async (req, res) => {
  const query_text = "SELECT * FROM rental_assignments";

  const client = await pool.connect();

  client.query(query_text, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
    } else {
      console.log("Query result:", result.rows);
    }

    client.release();

    return res.status(200).json(result.rows).end();
  });
});

router.post("/rentalAssignments", async (req, res) => {
  const body = req.body;
  console.log(body);

  const client = await pool.connect();

  const query_text =
    "INSERT INTO rental_assignments(customer_name, begin_date, end_date, amount_boxes) VALUES ($1, $2, $3, $4) RETURNING *";
  const query_values = [
    body.name,
    body.dateOfRental,
    body.dateOfReturn,
    body.numberOfBoxes,
  ];

  pool.query(query_text, query_values, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
    } else {
      console.log("Query result:", result.rows);
    }

    client.release();

    return res.status(200).json(result.rows[0]).end();
  });
});

router.delete("/rentalAssignments/:id", async (req, res) => {
  const id = req.params.id;

  const client = await pool.connect();

  const query_text = `DELETE FROM rental_assignments WHERE id = ${id}`;

  pool.query(query_text, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
    } else {
      console.log("Query result:", result.rows);
    }

    client.release();

    return res.status(200).json(result.rows[0]).end();
  });
});

module.exports = router;

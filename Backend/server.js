const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const Table = require("cli-table");

const app = express();
const connection = mysql.createConnection({
  host: "atlan-db.clugewa2cs1y.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Jayant2550",
  database: "employees",
});

function handleDisconnect() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log("Connected to the database!");
    }
  });

  connection.on("error", (err) => {
    console.error("Database error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); // Reconnect if the connection is lost
    } else {
      throw err;
    }
  });
}

handleDisconnect(); // Start initial connection

app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const { query } = req.body;
  console.log("Received query from frontend:", query); // Add a log statement to see the query in the console

  if (!query) {
    return res.status(400).json({ error: "Please provide a SQL query" });
  }

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Error executing query" });
    }

    console.log("Query executed successfully."); // Add a log statement to indicate successful query execution

    const table = new Table({
      head: Object.keys(results[0]),
    });

    results.forEach((row) => {
      table.push(Object.values(row));
    });

    res.send(table.toString());
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

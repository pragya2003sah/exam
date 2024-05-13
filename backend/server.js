const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 4000,
  password: "",
  database: "examify",
});
app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO registration(`name`,`email`,`password`,`country`,`school`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.country,
    req.body.school,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM registration WHERE `email` = ? AND `password`=? ";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json({ login: true });
    } else {
      return res.json("fail");
    }
  });
});

app.listen(8081, () => {
  console.log("server is listening");
});

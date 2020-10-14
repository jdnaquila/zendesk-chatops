const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 8080;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
        throw err;
    } else {
        console.log("Connected to database");
    }
});

app.post("/set", (req, res) => {
    var values = [[req.query.username, req.query.name, req.query.lastname]];
    db.query(
        "INSERT INTO users (username, name, lastname) VALUES ?",
        [values],
        (err, result) => {
            if (err & (err != "ER_DUP_ENTRY")) {
                console.log("Error occurred:", err.message);
            }
            console.log(
                "1 record inserted:",
                "\nusername:",
                req.query.username,
                "\nname:",
                req.query.name,
                "\nlastname:",
                req.query.lastname
            );
        }
    );
    res.send({
        username: req.query.username,
        name: req.query.name,
        lastname: req.query.lastname,
    });
});

app.get("/get", (req, res) => {
    db.query(
        "SELECT * FROM users WHERE ?",
        { username: req.query.username },
        (err, result) => {
            if (err) {
                console.log("Error occurred:", err.message);
            } else if (result.length > 0) {
                console.log("User found:", result[0].username);
                res.send(result[0].username);
            } else {
                console.log("User not found");
                res.send("User not found");
            }
        }
    );
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error occurred", err.message);
    } else {
        console.log("Application listening on port", port);
    }
});

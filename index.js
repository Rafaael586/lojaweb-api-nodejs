// inicio do codigo
const express = require("express");

const app = express();

// configurando express
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", function (req, res,) {
    res.status(200).json({ message: "Bem Vindo" });
});

app.listen(3000);
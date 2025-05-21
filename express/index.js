const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;
const userApi = require("./api/user");
require("./api/product")(app, "text");

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user", userApi.save);
app.get("/user", userApi.list);

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.post("/corpo", (req, res) => {
  //   let body = "";
  //   req.on("data", (chunk) => {
  //     body += chunk.toString();
  //   });
  //   req.on("end", () => {
  //     res.json(JSON.parse(body));
  //   });
  res.send(req.body);
});

app.get("/clients/relatorio", (req, res) => {
  console.log("Dentro...");
  res.send(`CLient relatorio ${req.query.completo} ano : ${req.query.ano}`);
});

app.get("/clients/:id", (req, res) => {
  console.log("Dentro...");
  res.send(`CLient ${req.params.id}`);
});

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

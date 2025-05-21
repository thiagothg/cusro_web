const express = require("express");
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.post("/corpo", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    res.json(JSON.parse(body));
  });
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

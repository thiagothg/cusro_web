module.exports = (app, text) => {
  function save(req, res) {
    res.send(`USer products ${text}`);
  }

  function list(req, res) {
    res.send("List of products");
  }

  app.post("/product", save);
  app.get("/product", list);

  return { save, list };
};

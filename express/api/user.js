function save(req, res) {
  res.send(`USer saved ${req.body.name}`);
}

function list(req, res) {
  res.send("List of users");
}

module.exports = { save, list };

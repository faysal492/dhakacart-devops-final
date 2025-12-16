const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "DhakaCart API running" });
});

app.listen(3000, () => console.log("Backend running"));

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Cloud Run!");
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
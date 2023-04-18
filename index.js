const express = require("express");
const app = express();

// Define a GET API
app.get("/", (req, res) => {
  res.send("Hello, Team! I am responding directly from Ubuntu.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

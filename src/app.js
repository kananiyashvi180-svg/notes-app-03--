const express = require("express");
const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notes API Running Successfully",
  });
});

app.use("/api/notes", noteRoutes);

module.exports = app;
const express = require("express");
const router = express.Router();

router.get("/nama", (req, res) => {
  res.send("Ucok");
});

router.get("/umur", (req, res) => {
  res.send("22");
});

router.get("/json", (req, res) => {
  res.json({ status: "belajar", serius: true });
});

router.post("/user", (req, res) => {
  const { nama, umur } = req.body;

  res.json({
    message: "Data diterima",
    data: {
      nama,
      umur,
    },
  });
});

module.exports = router;

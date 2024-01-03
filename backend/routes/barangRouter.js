const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangController");

router.post("/insertbarang", barangController.insertBarang);
router.put("/updatebarang/:kode_barang", barangController.updateBarang);
router.get("/barang", barangController.getBarang);
router.delete("/deletebarang/:kode_barang", barangController.deleteBarang);

module.exports = router;
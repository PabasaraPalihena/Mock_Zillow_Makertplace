const express = require("express");
const router = express.Router();
const {
  getallRealEstate,
  getRealEstate,
  addRealEstate,
  updateRealEstate,
  deleteRealEstate,
} = require("../controllers/Building");

router.get("/", getallRealEstate); //get all Estates
router.get("/:id", getRealEstate); //get Estate using id
router.post("/", addRealEstate); //add a realestate
router.put("/:id", updateRealEstate); //update estate details
router.delete("/:id", deleteRealEstate); //delete the estate

module.exports = router;

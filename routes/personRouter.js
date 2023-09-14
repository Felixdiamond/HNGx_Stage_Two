const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
  ],
  createPerson
);

router.get("/:identifier", getPerson);

router.put(
  "/:identifier",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
  ],
  updatePerson
);

router.delete("/:identifier", deletePerson);

module.exports = router;

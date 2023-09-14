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
    // You can add a validation for the email here if you want
  ],
  createPerson
);

router.get("/:identifier", getPerson);

router.put(
  "/:identifier",
  [
    // The name is no longer required in the update route
    // because the user might want to update the email only
    body("name").optional().isString(),
    // The email is also optional in the update route
    // because the user might want to update the name only
    body("email").optional().isEmail(),
  ],
  updatePerson
);

router.delete("/:identifier", deletePerson);

module.exports = router;
const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.post("/:plantId", plantController.getPlantInfo);
router.get("", plantController.plantListFilterData);

module.exports = {
  router,
};

const express = require("express");
const router = express.Router();
const {
  routerGetCars,
  routerPostCars,
  routerByidCars,
  routerPutCars,
  routerDeleteCars,
} = require("../Controllers/CarsController");

const {routerLocation}=require('../Controllers/GetLocation')

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  routerPostCars(req, res);
});

/* This is a get request that is being sent to the server. */
router.get("/", (req, res) => {
  routerGetCars(req, res);
});

router.get('/:location', async (req, res) => {
  try{
    const {location}=req.params;
      const carLocatio= await routerLocation(location);
      return res.send(carLocatio);
  }catch (error) {
      res.status(404).json(error.message);
  };
});

/* This is a get request that is being sent to the server. */
router.get("/:id", (req, res) => {
  routerByidCars(req, res);
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {
  routerPutCars(req, res);
});
/* This is a delete request that is being sent to the server. */
router.delete("/:id", (req, res) => {
  routerDeleteCars(req, res);
});

module.exports = router;

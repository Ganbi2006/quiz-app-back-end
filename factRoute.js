const { Router } = require("express");
const { createFact, getFact, getAllFact, deleteFact } = require("../controller/factController");
const factRoute = Router();


factRoute.post("/createFact", createFact);
factRoute.get("/getFact", getFact);
factRoute.get("/getAllFact", getAllFact )
factRoute.delete("/deleteFact/:factId", deleteFact)

module.exports = factRoute;

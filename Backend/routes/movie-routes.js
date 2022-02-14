const express=require('express');
const router=express.Router();
const moviesController=require("../controllers/movies-controller");
const Movie=require("../model/Movie")

router.get("/", moviesController.getAllMovies);
router.post("/",moviesController.addMovie);
router.get("/:id",moviesController.getById);
router.put("/:id",moviesController.updateMovie);
router.delete("/:id",moviesController.deleteMovie);

module.exports=router;
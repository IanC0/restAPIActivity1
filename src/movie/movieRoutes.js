const { Router } = require("express") //Router is something built into express

const { addMovie, listMovies, updateMovies, deleteMovie } = require("./movieControllers.js");

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie); // ./movie is name of endpoint
movieRouter.get("/movie", listMovies); 
movieRouter.put("/movie", updateMovies);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter;
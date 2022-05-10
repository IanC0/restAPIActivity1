const Movie = require("./movieModel")

exports.addMovie = async (req, res) => { //request and response
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie }) //200 = standard code to advise everything is fine .send(......) returns the newMovie object in the preview on Insomnia       
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message }) // 500 = common error code
    }
}

exports.listMovies = async (req, res) => {
    try {
        const movied = await Movie.find({});
        res.status(200).send({ movied });
    } catch(errod) {
        console.log(errod);
        res.status(500).send({ error: errod.message })        
    }
}


exports.deleteMovie = async (req, res) => {
    try {
        const movieDel = await Movie.deleteOne({ where: {title: req.title}});
        res.status(200).send("Delete request made")
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
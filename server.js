require("./src/db/connection"); //connection open straight away
const express = require("express");
const cors = require("cors"); //origin is local host, when it comes to hosting the origin is different
//a fetch request from local host is trusted by machine. fetch request to hiroku/github, netlify might not trust hiroku. It blocks access and raises a cors message (not trust worthy, won't complete fetch request)
//cors bypasses this
const movieRouter = require("./src/movie/movieRoutes");
const userRouter = require("./src/user/userRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors()); //always use cors before router

app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
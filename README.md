# restAPIActivity1 - might be best to view ReadMe in Visual Studio Code as JSON objects in github's browser are appearing on one line. 


2 Databases (Movie and User)

## Movie ##
GET: 
 - lists all movies

PUT:
 -  add a movie
 - input as an object:
{ 
    "title": "Pulp Fiction"    <--- String;
    "actors: ["actor 1", "actor 2"]   <--- List actors as strings in an array;

}

PUT: 
 - update a movie
 - identify movie to be updated using {"title": "movie title"}
 - update movie using {"newTitle": "new movie title", "newActors": ["actor 1", "actor 2", "new actor"]}
 - example:
 {
     "title": "Pulp Fction",
     "newTitle": "Pulp Fiction",//replaces existing movie title
     "newActors": ["Samuel L Jackson","Bruce Willis"]// replaces existing actors array 
 }

 DELETE: 
 - delete a movie
 - identify movie to be deleted using {"title": "movie title"}


 ## User - Best to start by adding a user and an admin, therefore POST listed first in below list ##
 POST: 
 - add a new user or admin
 {
	"username": "admin1",       //type = string
	"email": "email1@admin1.com",       //type = string
	"pass": "pass1",        //type = string
	"access": "admin"       //type = string (either "user" or "admin")
}

GET:
- returns a list of users and admins
- only available to admin, admin will have to input their username and password in the JSON field on the GET screen
{
    "username": "",      //admins username
    "pass": ""        //admins password
}


PUT: 
- update user or admin
- user or admin will have to login
{
    "username": "" //user's or admin's username
    "pass": "" //user's or admin's password
}

DELETE:
- delete user or admin
- user or admin will have to login
{
    "username": "" //user's or admin's username
    "pass": "" //user's or admin's password
}
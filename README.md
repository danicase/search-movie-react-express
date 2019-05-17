#Movie Search

##Description
This project has been created to play around with react/redux make secure API calls and is a good place to look for a new movies :)

## Initial setup

- install node v 11.x.x
- On the project directory run 
-  `npm install`

That's it for the client side app! 
Now we need to get the server starting: 
- let's go to the server folder `cd server` 
- and run `npm i`

That's it, we are up and running! 

## To make it work

The project needs a private key from https://developers.themoviedb.org/3/getting-started/introduction

Once you obtain your key you have two options: 
1. You can create a file called `Constants.js` in the server directory and save the key as `THEMOVIEDB_KEY = {your_key}`
2. or when you run the server you add the variable API_KEY : 
  `API_KEY={your_key} npm run server`

##Run the Repo

You will need 2 terminal: one to run the server and one for the client app, 

#### Run the server

Simply run `npm run server`
The server will run at [http://localhost:4000](http://localhost:4000)

#### Run the App

In another terminal run `npm run start`
The app will run at [http://localhost:3000](http://localhost:3000)

++++++++++++++++++++++++++++++++++++++++

##Build Plan of the App

The app is still on development.
I follow the building process in phases to that I can keep track at what stage the project currently is and what need to do next: 

1. Get Espress.js up and running and create a basic API call to MovieDB **(done)**
2. Improve the structure of the server and implement the search and getConfig API **(done)**
3. Create the Client app and make an easy call to our server **(done)**
4. Create the searchBar component and connect it to the server **(done)**
5. Add redux and get track of the result of the movies **(done)**
6. Create the components necessary to display a list of movie **(done)**
7. Style the search bAr to make more presentable **(done)**
8. Obtain the poster of the movies and style to make it nice **(done)**
9. Add React-router for a more detailed page when you click on a movie.
10. create the api Server-side and Client-side to get the details
11. Style a but to make it presentable
10. visualize page index and Implement the next-page button (or see more). 
11. Spike: can I search movies based on director or cast? 


##Consideration
####Server
- The server is a simple Express.js as light as possible, The only goal of it is is to make API calls to the MovieDB on behalf or my React App for security reasons. 
- The getConfig API is done only once and the result is stored. This way we avoid to do useless calls and waste resources.

####Redux
- This app looks simple enough and could have been easily be done without redux. I decided to use it for me to improve the mechanics and as the project gets bigger will have no problem scaling.

#### Actions and Redux
- I don't use middleware to be able to dispatch function because it adds unnecessary complexity and confusion. As Redux suggests, side effects should be part of the action creation process so I will keep them in the UI component. Maybe in the future we will add a paradigm
- Actions and reducer are simple enough to manage for now. When the project gets bigger if will become difficult to manage I will consider use a paradigm (reducer composition maybe). 


#### Possibile future improvement

- add a loading component for when we are waiting the result from the server

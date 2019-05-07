#Movie Search

##Description
This project has been created to play around with react/redux make secure API calls and is a good palce to look for a new movies  

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

The project need a private key from https://developers.themoviedb.org/3/getting-started/introduction

Once you obtain your key you have two options: 
1. You can create a file called `Constants.js` in the server directory and save the key as `THEMOVIEDB_KEY = {your_key}`
2. or when you run the server you add the variable API_KEY : 
  `API_KEY={your_key} npm run server`

##Run the Repo

You will need 2 terminal: one to run the little server and one for the client app, 

#### Run the server

Simply run `npm run server`
The server will run at [http://localhost:4000](http://localhost:4000)

#### Run the App

In another terminal run `npm run start`
The app will run at [http://localhost:3000](http://localhost:3000)

++++++++++++++++++++++++++++++++++++++++

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

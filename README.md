# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

This is a simple weather app that pulls weather information about your current location. 
It shows the current time, temperature, sunrise and sunset times. You can also search 
the weather of other locations using the search function.

It is easy to run. Just clone the respository using VS code. Install the react-app node_modules
 by using the npm install command and check the package.json file in your new project to make 
 sure it matches this project. If anything is missing you can type npm i (name of missing dependency)
 and then use npm start to run it.

 I created this project over several days, but then only committed it once everything ran properly. 

 I first created the currentLocation page to get the current location to work which next meant I needed
  to use the weather api to make it work which is when I added the apiKeys file. To make the api keys work for you. 
  go to https://home.openweathermap.org/myservices and sign up, then register for free api keys. They will send you 
  an email with your free api key and an api to test it with. Use the test link to make sure it works. Once it works, 
  you can copy the api key into your own file where mine is listed.

  Next, I create the search city function using the forecast.js file. This is where i added the cost to search different
  cities weather. After this I just fine tuned everything. Such as converting times, temps and refining the UI in the css.

  Although it was all committed at once, I spent a lot of time on it in one day. I only had a few days to make it so 
  there are only a few commits.

  Video going over application: 
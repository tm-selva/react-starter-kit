## React Boiler Plate


## Prerequisites

- node v9.10.0 +
- yarn v1.3.2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack
* React
* Material ui
* Webpack - Configuration done by react by default.
* Store - Redux, Redux saga.
* http Client - Axios

## Available Scripts
In the project directory, you can run:

### To start with Set the environment and Install dependencies

You need to set NODE_ENV variable as `development` for development environment, in your terminal.
```bash
export NODE_ENV="development" 
```
Suggestion: You can set NODE_ENV in your .bash_profile
```bash
npm install
```
This command installs all the needed dependencies.
### Starting the App
```bash
npm start
```
##### You can also start the aplication using docker and docker-compose

To install Docker and docker compose. Please follow the steps in the given link [docker](https://docs.docker.com/docker-for-mac/install/) [docker-compose](https://docs.docker.com/compose/install/)

Development mode:
```bash
docker-compose up
````
Production mode:
```bash
docker-compose -f docker-compose-prod.yml up
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
```bash
npm test
```
Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

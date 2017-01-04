# React Redux TypeScript example

<img align="center" src="./logo.png">


### A simple starter pack for react with react-router, webpack, hot-reloading and linting set up. 

I made this repository to give examples of TypeScript can improve the react/redux experience.
I tried to not go overboard with the static type checks, but rather use TypeScript where
I felt it actually solved problems. For example, *actions* are still fairly loosely typed. It's
possible to use TypeScript to a much greater extent than I've done, but don't go adding
complexity only to solve problems you don't actually have.

> If you don't have yarn, replace the **yarn** commands with **npm**.

# Run the sample application

## Install dependencies
```sh
$ yarn install
```
## Serve application
Launches the application with webpack-dev-server.
```sh
$ yarn start
```
Open a browser and go to [localhost:8080](http://localhost:8080)
## Build application
Produces a minified production build.
```sh
$ yarn build
```
## Lint application
When serving or building the application, linting is performed as part
of the bundling. You can manually perform linting though the following command.
```sh
$ yarn lint
```

# Run tests
Testing is configured with [wallaby.js](https://wallabyjs.com/).
Wallaby.js is a continuous test runner for JavaScript and TypeScript
that is currently unparalleled when in comes to ease of setup, ease of
use and performance. The only downside is that it's not free. If you are
serious about testing your front end, give it a try. I spent many hours
trying to get everything integrated with mocha, while with wallaby, it
just works.

***How you run wallaby depends on your IDE. I won't provide specifics
here as they are likely to change.***

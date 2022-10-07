## What is this?

This is a site I'm making that I hope will become a place where I can input all the coffee I drink. Once I have all that data, I want to do some analysis and make some cool infographs so that I can see what coffee I'm drinking and how I'm drinking it in. I got the idea from Spotify's "Wrapped" feature, which gives you a big overview of your entire past year listening to music, including what/who you listened to and how long you listened to it/them. I look forward to that feature every year, and I kind of just wanna do the same thing except for my coffee drinking.

I'm hoping to develop this site in a way so that, eventually, anyone can create an account and use it if they want. However, I'm mostly just focusing to make it a fun side project so I don't get burnt out; so don't be _too_ upset if you're using it and something doens't work as expected. If you're reading this and want to help out: I'm all for that! Clone this bad boy and send in some PRs if you're feeling it.

## How to Start Developing

I _hope_ that this is an exhaustive tutorial on how to get up and running with this application on your local machine, no matter how much experience you have developing. Some of this may be assumed in most projects, but I wanted to be sure that anyone would be able to get this up and running.

First, you need to make sure you have `git` on your machine. To check if you have it already installed, open your `Terminal` application (or whatever third party application you use for your terminal), and run the command:

`git --version`

If it says something about not having `git`, you'll need to donwload it from their [website](https://git-scm.com/downloads). It also might be the case that it will ask you if you want to download it right from the terminal, which will also work. You will likely have to quit and reopen terminal in order to see the changes take affect. Simply run `git --version` once you open it again and make sure you get a response (something like `git version 2.37.0 (Apple Git-136)`).

Now that you have `git` installed, you can now download the code for the website! Open your terminal, and then you'll want to navigate to the folder you want to have the code in (when you open your terminal, you'll likely be in the root directory of the user; for me, that would `/Users/jackbrenneman`. If you want to navigate to another location, simply type `cd <folder>` until you're in the filepath you want. When you're there, run:

`git clone git@github.com:jackbrenneman/jack-enjoys-coffee.git`

You now have the code! Before starting to develop, there's a few prerequisite things you need to run and/or download to get everything working correctly.

Firstly, you'll need [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).

Once downloaded, you can do the same thing that you did with `git` to see if it was downloaded properly:

`nvm --version`

If it gives you back a response, you're good to go!

Now you need to download and install `Node.js` and `npm`. 

Since we have `nvm` installed now, we can simply run `nvm install node` in our terminal.

We now have `npm` and `node` installed! The last thing we want to do is make sure we're using the right version of `node`, since the current most updated version of node that works for this project is 14. So we want to run `nvm install 14`. This will most likely automatically start using version 14, but it doesn't hurt to run `nvm use 14` just to make sure.

In your terminal, navigate into your `jack-enjoys-coffee` folder that you created when you ran the `git clone` command. Once there, you can run:

`npm install`

This will look at the `jack-enjoys-coffee` code and install all the dependencies needed to run the website locally.

The last step is to run `npm run dev`. This will start a local development server on *http://localhost:3000*. This is the website! Now running locally on your machine.

There's one more thing to change to make sure that the data is properly being fetched for the website. In the code (specifically, the [package.json](https://github.com/jackbrenneman/jack-enjoys-coffee/blob/main/package.json), we need to add in a proxy so that our GraphQL requests use the correct URL. We just need to add the following line to the file:

`"proxy": "http://localhost:3001",`

I usually do this on the line before `"type": "module"`, which is why it has the comma in it. You'll need to save this change and re-run `npm run dev` to see the changes take affect. Now when you navigate throughout the site, you'll actually be able to see data and sign in/out!


## Available Scripts

### `npm run dev`

This basically just runs `npm start` and `npm run server` in parallel.<br />
The `npm start` part just starts a local development server which you can open at [http://localhost:3000](http://localhost:3000) to view the project in the browser. It will reload as you make changes.
The `npm run server` part starts another local server which you can open at [http://localhost:3001/graphql](http://localhost:3001/graphql) to view the Graphiql interface in the browser. The Graphiql interface is super hepful to help see the API of the project. If you want to learn more about how to use the interface, you can check that out [here](https://github.com/graphql/graphiql/tree/main/packages/graphiql#readme). The server restarts when you make changes, but you'll need to refresh the Graphiql page to see the changes.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


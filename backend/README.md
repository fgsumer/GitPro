# node-js-getting-started (for the first time to study)

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally (for the first time to study)

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Installing to Heroku cli (If not installed on your pc, firstly install it)

Here you can find [the link to install the heroku cli](https://devcenter.heroku.com/categories/command-line)

## Very Important Check before all (remote)

Go to /backend folder and then:

```
$ git remote -v

```

This command must give this result:

```
heroku https://git.heroku.com/fierce-depths-02024.git (fetch)
heroku https://git.heroku.com/fierce-depths-02024.git (push)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (fetch)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (push)

```

Otherwise change [the heroku remote](https://stackoverflow.com/questions/6226846/how-to-change-a-git-remote-on-heroku) and [origin remote](https://stackoverflow.com/questions/22694294/reconnect-remote-origin)

## Running heroku on local server to test

```
$ npm install
$ heroku local

```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

**Note:** While trying to deploy changes to heroku, firstly cli redirects you to browser and requires you to login to heroku with your e-mail. After logging in:

```
$ git add .
$ git commit -m "commit message"
$ git push heroku master
$ heroku open
```

Your app should now be running on server with the name of your app [fierce-depths-02024](https://fierce-depths-02024.herokuapp.com/express_backend).

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

# Express/Node Server
This is a Sandbox for creating a base server-layer for a full-stack React Application or any Node.js app. The steps involved are getting your instance of the Express/Node API working and deploying the application to Heroku.

## Getting Started
```
> npm install
> node index.js
```
That's it, you should have an express server running at localhost:5000... read the code for further detail about how all of this works.
## Setting Up Heroku (Optional)
if you do not have a Heroku account please go ahead and [create one](https://www.heroku.com/)
```
> heroku login
> heroku create
> git remote add heroku <git address here>
> git push heroku master
> heroku open
```
There you have it. You should now have an instance of an express server running locally, and hopefully on Heroku as well.

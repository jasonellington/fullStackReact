# Backend React/React Native Server
This is a repo that has useful plugins for a node.js and mongodb backend. Some stuff is pulled from Stephen Griders Full Stack React Course on udemy. I have also added different packages and libraries that I have wanted to explore and found useful in my exploration. enjoy.

## Getting Started
```
> npm install
> npm run start
```
You should have an express server running at localhost:5000... read the code for further detail about how all of this works.

## Setting Up Heroku (Optional)
if you do not have a Heroku account please go ahead and [create one](https://www.heroku.com/)
```
> heroku login
> heroku create
> git remote add heroku <git address here>
> git push heroku master
> heroku open
```
You should now have an instance of an express server running locally, and hopefully on Heroku as well.

## Passportjs - Google Login Flow
In order to get the flow working with google, you need to setup [a google developers account](https://console.developers.google.com). After that you should change the google client id and secret within index.js. You can ensure you are doing this properly by checking the console to see if it prints out your google accounts information.

note: I have my keys stored in a private file that I do no push to my repo.

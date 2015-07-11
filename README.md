# Vue + Flux :couple:
An example of showing how to implement [Flux](http://facebook.github.io/flux/) into a [Vue.js](http://vuejs.org/) app.

## Thoughts :thought_balloon:
 + Since this is a fairly small application, so the real benefits of flux is unobvious.
 + Since Vue.js has its own [event system](http://vuejs.org/api/instance-methods.html#Events) so it would be great to leverage Vue native events into our Flux system. Tried to use [Vue.js instance](http://vuejs.org/api/instance-properties.html) as Flux store but din't go well.

## Run the app :computer:
This app is pretty simple. But it shows that Flux is working with Vue.js. Nothing fancy, to run it
```
npm clone https://github.com/yang-wei/vue-flux.git 
npm install
npm run build
```
To watch with webpack hot module replacement :fire:
```
npm run hot
```

## Todo :memo:
 + Extends this app to multiple pages
 + Unit testing

## Dev tools used :gun:
 + webpack (and it's dev server)
 + babel for es6 

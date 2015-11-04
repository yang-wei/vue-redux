> __Vue.js__: Vue.js is a library for building modern web interfaces. 
It provides data-reactive components with a simple and flexible API.

> __Redux__: Predictable state management for JavaScript apps

# vue-redux
A Vue.js mixins to integrate redux.
> Note: Not production ready. Use at your own risk.

# Installation
```
npm install vue-redux
```

# How to use ?
Please see the example in this repo.

# Run the example :computer:

![](https://cldup.com/J7pXN7Y2ix.png)

This app is just a pretty simple task list app. But it shows how to use vue-redux in a Vue.js application. Nothing fancy, to run it
```
npm clone https://github.com/yang-wei/vue-redux.git 
cd example
npm install
npm run build
```
To watch with webpack hot module replacement :fire:
```
npm run hot
```
And go to `http://localhost:8080/`.

## What about the pure Flux?
I start to experiment this with the pure Flux. You can still find it on [flux branch](https://github.com/yang-wei/vue-flux/tree/flux) or [here](https://github.com/yang-wei/vue-flux/releases/tag/v0.0.1)

## Vuex
Recently, the creator of Vue.js created [Vuex](https://github.com/vuejs/vuex) which is a library to enable Vue.js adopt Flux-like architecture. 
Have a look if you're interested =)

import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home"
import HelloWorld from "./components/HelloWorld"

Vue.use(Router)

let router = new Router({
       mode: 'history',
       base: '/pinata/dist/',
      routes: [
        {
        path: "/",
        name: "Home",
        component:  Home
        },
        {
         path: "/HelloWorld",
         name: "HelloWorld",
         component: HelloWorld
        },

     ] 

});

export default router
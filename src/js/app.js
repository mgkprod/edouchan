import Vue from "vue"
import VueRouter from 'vue-router'
import {Keyframes} from 'vue-keyframes';

Vue.use(VueRouter)
Vue.use(Keyframes);

import MenuView from './views/MenuView';
import GameView from './views/GameView';
import AboutView from './views/AboutView';

const routes = [
  { path: '/', component: MenuView, meta: { transitionName: 'fade' }},
  { path: '/game', component: GameView, meta: { transitionName: 'fade' }},
  { path: '/about', component: AboutView, meta: { transitionName: 'fade' }},
]

const router = new VueRouter({
  routes,
})

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    router,
    el: '#app'
})

// Vertical Height Ajustement

let vh = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', vh);
vh();
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ReviewCards from './components/Review-Cards'
import ReviewEditor from './components/ReviewEditor'
import Ads from './components/Ads'
import AdEditor from './components/AdEditor'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: ReviewCards,
      ads: Ads
    }
  },
  {
    path: '/add-review',
    components: {
      default: ReviewEditor,
      ads: Ads
    }
  },
  {
    path: '/add-ad',
    components: {
      default: AdEditor,
      ads: Ads
    }
  }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

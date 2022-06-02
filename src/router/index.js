// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router



import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TCForm from '../views/TCFormView.vue'
import GermanyANDUser from '../views/GermanyANDUser.vue'
import GermanyANDUserANDBKYC from '../views/GermanyANDUserANDBKYC.vue'
import GermanyANDUserANDBKYCANDIssuer from '../views/GermanyANDUserANDBKYCANDIssuer.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/termsandconditionsform',
    name: 'termsandconditionsform',
    component: TCForm,
  },
  {
    path: '/country=Germany/user=Yes/kyc=/kycType=/issuer=',
    name: 'germanyUser',
    component: GermanyANDUser,
  },
  {
    path: '/country=Germany/user=Yes/kyc=No/kycType=/issuer=',
    name: 'germanyUserNoKYC',
    component: GermanyANDUser,
  },
  {
    path: '/country=Germany/user=Yes/kyc=Yes/kycType=/issuer=',
    name: 'germanyUserKYC',
    component: GermanyANDUser,
  },
  {
    path: '/country=Germany/user=Yes/kyc=Yes/kycType=corporate(BKYC)/issuer=',
    name: 'germanyUserBKYC',
    component: GermanyANDUserANDBKYC,
  },
  {
    path: '/country=Germany/user=Yes/kyc=Yes/kycType=corporate(BKYC)/issuer=No',
    name: 'germanyUserBKYCNoIssuer',
    component: GermanyANDUserANDBKYC,
  },
  {
    path: '/country=Germany/user=Yes/kyc=Yes/kycType=corporate(BKYC)/issuer=Yes',
    name: 'germanyUserBKYCIssuer',
    component: GermanyANDUserANDBKYCANDIssuer,
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router

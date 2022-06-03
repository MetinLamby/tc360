import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TCForm from '../views/TCFormView.vue'
import GermanyANDUser from '../views/GermanyANDUser.vue'
import GermanyANDUserANDBKYC from '../views/GermanyANDUserANDBKYC.vue'
import GermanyANDUserANDBKYCANDIssuer from '../views/GermanyANDUserANDBKYCANDIssuer.vue'
import ForbiddenPage from '../views/ForbiddenPage.vue'
// import {store} from '../store/store.js'

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
    path: '/forbidden',
    name: 'forbidden',
    component: ForbiddenPage,
  },
  {
    path: '/country=Germany/user=true/kyc=false/issuer=false',
    name: 'germanyUser',
    component: GermanyANDUser, 
  },
  {
    path: '/country=Germany/user=true/kyc=true/issuer=false',
    name: 'germanyUserBKYC',
    component: GermanyANDUserANDBKYC,
  },
  {
    path: '/country=Germany/user=true/kyc=true/issuer=true',
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

import Vue from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'
import router from './router'
import VueJwtDecode from 'vue-jwt-decode'
import { store } from './store/store.js'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App, { props: { keycloak: keycloak } })
// }).$mount('#app')



let initOptions = {
  url: 'http://localhost:8080/', realm: 'tcrealm', clientId: 'tcrealm', onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);
Vue.prototype.$keycloak = keycloak;


keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.log("Authenticated");

    new Vue({
      router, store,
      render: h => h(App, { props: { keycloak: keycloak } })
    }).$mount('#app')
  }

  const decodedToken = VueJwtDecode.decode(keycloak.token)
  console.log(decodedToken)
  const roles = decodedToken.realm_access.roles
  const email = decodedToken.email

  store.commit("store_roles", roles)
  store.commit("store_email", email)

  console.log(roles)
  console.log(email)



//Token Refresh
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed' + refreshed);
      } else {
        console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.log('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  console.log("Authenticated Failed");
});



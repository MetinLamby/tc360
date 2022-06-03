import Vue from 'vue'

import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userData: {
            email: "",
            roles: []
        }
    },
    mutations: {
        store_roles(state, data) {
            state.userData.roles = data
        },
        store_email(state, data) {
            state.userData.email = data
        }
    }
})
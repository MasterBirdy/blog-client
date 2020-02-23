import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentJWT: "",
        errorMessage: "",
        errors: []
    },
    getters: {
        jwt: state => state.currentJWT,
        jwtData: (state, getters) =>
            state.currentJWT
                ? JSON.parse(atob(getters.jwt.split(".")[1]))
                : null,
        getErrorMessage: state => state.errorMessage,
        getErrors: state => state.errors
    },
    mutations: {
        setJWT(state, jwt) {
            state.currentJWT = jwt;
        },
        setErrorMessage(state, message) {
            state.errorMessage = message;
        },
        setErrors(state, errors) {
            state.errors = errors;
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                axios({ url: "/api/login", data: user, method: "POST" })
                    .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                            commit("setJWT", res.data.token);
                            resolve();
                        } else {
                            reject("error with auth");
                        }
                    })
                    .catch(err => reject(err));
            });
        }
    }
});

<template>
    <div>
        <form @submit.prevent="register">
            <label for="username">Username</label>
            <input
                type="text"
                required
                v-model="username"
                placeholder="Username goes here..."
                name="username"
                id="username"
            />
            <label for="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                required
                placeholder="Enter password..."
            />
            <label for="confirmpassword">Confirm Password</label>
            <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                v-model="confirmpassword"
                required
                placeholder="Confirm password..."
            />
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "RegisterForm",
    data() {
        return {
            username: "",
            password: "",
            confirmpassword: ""
        };
    },
    methods: {
        register: function() {
            let username = this.username;
            let password = this.password;
            let confirmpassword = this.confirmpassword;
            let user = {
                username,
                password,
                confirmpassword
            };
            axios({ url: "/api/signup", data: user, method: "POST" })
                .then(res => {
                    this.$store.dispatch("login", { username, password });
                })
                .then(res => {
                    if (res.status === 200) {
                        this.$router.push("/");
                    }
                })
                .catch(err => {
                    let errors = err.response.data.errors
                        ? err.response.data.errors
                        : [];
                    this.$store.commit(
                        "setErrorMessage",
                        err.response.data.message
                    );
                    this.$store.commit("setErrors", errors);
                });
        }
    }
};
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
input {
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
}

button {
    background-color: rgb(223, 223, 223);
    padding: 0.5rem 1rem;
    border: 1px solid grey;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
}
</style>

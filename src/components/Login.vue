<template>
    <div>
        <form @submit.prevent="login">
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
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login: function() {
            let username = this.username;
            let password = this.password;
            this.$store
                .dispatch("login", { username, password })
                .then(() => this.$router.push("/"))
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

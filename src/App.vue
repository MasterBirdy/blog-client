<template>
    <div id="app" class="container">
        <h1>Blog</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/login" v-if="!loggedIn">Login</router-link>
            <router-link to="/createpost" v-if="loggedIn"
                >Create Post</router-link
            >
            <p class="loggedInfo" v-if="loggedIn">
                Logged in as:
                <strong>{{ $store.getters.jwtData.username }}</strong>
            </p>
            <p v-else>Not logged in</p>
        </nav>
        <router-view />
    </div>
</template>
<script>
export default {
    name: "App",
    computed: {
        loggedIn: function() {
            return !(this.$store.getters.jwt === "");
        }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    margin-top: 2rem;
    font-family: "Muli", sans-serif;
    color: black;
}

h1 {
    font-size: 3rem;
    text-align: center;
}

.loggedInfo {
    margin-top: 0.5rem;
}

nav {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

.container {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

@media (min-width: 400px) {
    .container {
        width: 85%;
        padding: 0;
    }
}

@media (min-width: 550px) {
    .container {
        width: 80%;
    }
}
</style>

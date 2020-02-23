<template>
    <div class="home">
        <p><strong>Welcome home.</strong></p>
        <ul>
            <li v-for="(post, index) in publishedPosts" :key="index">
                <router-link :to="{ path: '/post/' + post._id }">{{
                    post.title
                }}</router-link>
                - {{ post.author.username }}
                <font-awesome-icon
                    v-if="loggedIn"
                    icon="minus-circle"
                    size="xs"
                    :style="{
                        color: '#B22222',
                        cursor: 'pointer',
                        marginRight: '0.33rem'
                    }"
                    @click="deletePost(post._id, index)"
                />
                <font-awesome-icon
                    v-if="loggedIn"
                    icon="pencil-alt"
                    size="xs"
                    :style="{ color: 'blue', cursor: 'pointer' }"
                />
            </li>
        </ul>
        <div v-if="loggedIn">
            <p class="unpublished-title">Unpublished posts:</p>
            <ul>
                <li v-for="(post, index) in unpublishedPosts" :key="index">
                    <router-link :to="{ path: '/post/' + post._id }">{{
                        post.title
                    }}</router-link>
                    - {{ post.author.username }}
                    <font-awesome-icon
                        v-if="loggedIn"
                        icon="minus-circle"
                        size="xs"
                        :style="{
                            color: '#B22222',
                            cursor: 'pointer',
                            marginRight: '0.33rem'
                        }"
                        @click="deletePost(post._id, index)"
                    />
                    <font-awesome-icon
                        v-if="loggedIn"
                        icon="pencil-alt"
                        size="xs"
                        :style="{ color: 'blue', cursor: 'pointer' }"
                    />
                </li>
            </ul>
        </div>
        <ErrorList></ErrorList>
    </div>
</template>

<script>
import ErrorList from "@/components/ErrorList";
import axios from "axios";

export default {
    name: "Home",
    components: {
        ErrorList
    },
    data() {
        return {
            publishedPosts: [],
            unpublishedPosts: [],
            error: null
        };
    },
    async created() {
        try {
            const response = await axios.get(`/api/publishedPosts`);
            this.publishedPosts = Object.values(response.data.results);
            const uresponse = await axios.get(`/api/unpublishedPosts`);
            this.unpublishedPosts = Object.values(uresponse.data.results);
        } catch (error) {
            console.log("oops");
            console.log(error);
        }
    },
    methods: {
        deletePost: function(id, index) {
            axios({
                url: "/api/post/" + id + "/delete",
                headers: { Authorization: `Bearer ${this.$store.getters.jwt}` },
                method: "DELETE"
            })
                .then(res => {
                    console.log(res);
                    if (res.status !== 200) {
                        console.log(res);
                    } else {
                        this.$delete(this.posts, index);
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
    },
    computed: {
        loggedIn: function() {
            return !(this.$store.getters.jwt === "");
        }
    }
};
</script>
<style scoped>
p {
    text-align: center;
}
ul {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;
}

.unpublished-title {
    color: rgb(95, 95, 95);
}
</style>

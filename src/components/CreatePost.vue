<template>
    <form @submit.prevent="createPost">
        <label for="title">Title</label>
        <input
            type="text"
            required
            v-model="title"
            placeholder="Title goes here..."
            name="title"
            id="title"
        />
        <label for="post">Post</label>
        <textarea name="post" id="post" rows="10" v-model="post">
            Put text here...
        </textarea>
        <label for="post_status">Status: </label>
        <select name="post_status" v-model="selected" id="post_status">
            <option value="Unpublished" selected>Unpublished</option>
            <option value="Published">Published</option>
        </select>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import axios from "axios";

export default {
    name: "CreatePost",
    data() {
        return {
            title: "",
            post: "",
            selected: "Unpublished"
        };
    },
    methods: {
        createPost: function() {
            axios({
                url: "/api/post",
                headers: { Authorization: `Bearer ${this.$store.getters.jwt}` },
                data: {
                    title: this.title,
                    text: this.post,
                    status: this.selected
                },
                method: "POST"
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.$router.push("/");
                    } else {
                        this.$store.commit(
                            "setErrorMessage",
                            "Something went wrong!"
                        );
                        this.$store.commit("setErrors", []);
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
    margin-bottom: 0.5rem;
}

textarea {
    width: 100%;
    font-family: "Muli", sans-serif;
    font-size: 14px;
    margin-bottom: 0.5rem;
}

button {
    margin-top: 1rem;
    background-color: rgb(223, 223, 223);
    padding: 0.5rem 0.75rem;
    border: 1px solid grey;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
}
</style>

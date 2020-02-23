<template>
    <div class="post">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <p><em>Created By:</em> {{ author }}</p>
        <hr />
        <Comment
            v-for="(comment, index) in comments"
            :key="index + comment.title"
            :title="comment.title"
            :text="comment.text"
            :author="comment.author"
            :date="comment.created_by_formatted"
        ></Comment>
        <CommentForm></CommentForm>
        <ErrorList></ErrorList>
    </div>
</template>

<script>
import axios from "axios";
import ErrorList from "@/components/ErrorList";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";

export default {
    name: "Home",
    components: {
        ErrorList,
        Comment,
        CommentForm
    },
    data() {
        return {
            title: "",
            text: "",
            author: "",
            comments: []
        };
    },
    async created() {
        try {
            const response = await axios.get(
                `/api/post/${this.$route.params.id}`
            );
            this.title = response.data.results[0].title;
            this.text = response.data.results[0].text;
            this.author = response.data.results[0].author.username;
            this.comments = response.data.results[0].comments;
        } catch (err) {
            console.log(err);
        }
    }
};
</script>
<style scoped>
hr {
    margin: 0.5rem 0;
}
</style>

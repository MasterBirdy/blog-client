<template>
    <div>
        <h2>Create a Post</h2>
        <CreatePost></CreatePost>
        <ErrorList></ErrorList>
    </div>
</template>
<script>
import CreatePost from "@/components/CreatePost";
import ErrorList from "@/components/ErrorList";

export default {
    name: "CreatePostPage",
    components: {
        CreatePost,
        ErrorList
    },
    created() {
        this.$store.commit("setErrorMessage", "");
        this.$store.commit("setErrors", []);
    }
};
</script>
<style scoped>
h2 {
    margin-bottom: 0.25rem;
}
.error-message {
    margin-top: 0.5rem;
}
</style>

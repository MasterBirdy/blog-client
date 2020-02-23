<template>
    <form action="">
        <label for="title">Title: </label>
        <input
            type="text"
            required
            v-model="title"
            placeholder="Put title here..."
            name="title"
            id="title"
        /></form
></template>
<script>
export default {
    name: "CommentForm"
};
</script>
<style scoped></style>

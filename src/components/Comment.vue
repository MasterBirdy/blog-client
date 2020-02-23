<template>
    <div>
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <p>{{ author }}</p>
        <p>{{ date }}</p>
    </div>
</template>
<script>
export default {
    name: "Comment",
    props: {
        title: String,
        text: String,
        author: String,
        date: String
    }
};
</script>
<style scoped>
div {
    margin-bottom: 0.5rem;
}
</style>

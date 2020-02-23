<template>
    <div>
        <strong
            ><p v-if="errorMessage">{{ errorMessage }}</p></strong
        >
        <ul v-if="errors.length > 0">
            <li v-for="(error, index) in errors" :key="error.msg + index">
                {{ error.msg }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "ErrorList",
    computed: {
        errorMessage: function() {
            return this.$store.getters.getErrorMessage;
        },
        errors: function() {
            return this.$store.getters.getErrors;
        }
    },
    created() {
        this.$store.commit("setErrorMessage", "");
        this.$store.commit("setErrors", []);
    }
};
</script>
<style scoped>
div {
    margin-top: 0.25rem;
}
p {
    color: rgb(189, 0, 0);
}
</style>

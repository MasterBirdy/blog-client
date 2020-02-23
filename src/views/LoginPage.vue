<template>
    <div>
        <h2>Please Log In</h2>
        <Login></Login>
        <ErrorList></ErrorList>
    </div>
</template>
<script>
import Login from "@/components/Login";
import ErrorList from "@/components/ErrorList";

export default {
    name: "LoginPage",
    components: {
        Login,
        ErrorList
    }
};
</script>
<style scoped>
h2 {
    font-size: 1.3rem;
}
</style>

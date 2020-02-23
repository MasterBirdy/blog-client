<template>
    <div>
        <h2>Register Here</h2>
        <RegisterForm></RegisterForm>
        <ErrorList></ErrorList>
    </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm";
import ErrorList from "@/components/ErrorList";

export default {
    name: "RegisterPage",
    components: {
        RegisterForm,
        ErrorList
    }
};
</script>
<style scoped>
h2 {
    font-size: 1.3rem;
}
</style>

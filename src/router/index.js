import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import LoginPage from "../views/LoginPage.vue";
import CreatePostPage from "../views/CreatePostPage.vue";
import RegisterForm from "../views/RegisterPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/post/:id",
        name: "Post",
        component: Post
    },
    {
        path: "/register",
        name: "RegisterForm",
        component: RegisterForm
    },
    {
        path: "/createpost/",
        name: "CreatePostPage",
        component: CreatePostPage
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

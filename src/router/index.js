import Vue from "vue";
import VueRouter from "vue-router";
import editprofile from "@/views/editprofile.vue";
import userphotos from "@/views/userphotos.vue";
import errorpage from "@/views/errorpage.vue";
import friends from "@/views/friends.vue";
import searchpage from "@/views/searchpage.vue";
import about from "@/views/about.vue";
import feed from "@/views/feed.vue";
import register from "@/views/register.vue";
import login from "@/views/login.vue";
import notification from "@/views/notification.vue";
import friendprofile from "@/views/friendprofile.vue";
import ownfeed from "@/views/ownfeed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/editprofile",
    name: "EditProfile",
    component: editprofile,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/userphotos",
    name: "UserPhotos",
    component: userphotos,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/friends",
    name: "friends",
    component: friends,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/search",
    name: "search",
    component: searchpage,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/notification",
    name: "notification",
    component: notification,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/feed",
    name: "feed",
    component: feed,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/about",
    name: "about",
    component: about,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/friendprofile",
    name: "friendprofile",
    component: friendprofile,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/ownfeed",
    name: "ownfeed",
    component: ownfeed,
    beforeEnter(to, from, next) {
      checkRoute(to, from, next);
    },
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "*",
    name: "errorpage",
    component: errorpage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
let checkRoute = function(to, from, next) {
  let sessionId = localStorage.getItem("sessionId");
  let loggedInUser = localStorage.getItem("myName");
  if (sessionId && loggedInUser) {
    next();
  } else {
    next("/");
  }
};

export default router;

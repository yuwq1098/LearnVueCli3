/* eslint-disable no-console */
/**
 * registerServiceWorker.js就是用来控制 Service workers 的注册和卸载，
 * 它可以在 生产环境 中，注册一个service worker来为本地缓存提供服务。
 * 这使得应用程序在随后的访问中加载更快，并且可以实现离线加载。
 */


import {
  register
} from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
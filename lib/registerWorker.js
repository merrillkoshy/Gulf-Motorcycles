import { firebaseCloudMessaging } from "./webPush";
import firebase from "./firebaseConfig";
import localforage from "localforage";

function getMessage() {
  const messaging = firebase.messaging();

  messaging.onMessage((message) => {
    const { title, body } = JSON.parse(message.data.notification);
    var options = {
      body,
    };
    self.registration.showNotification(title, options);
  });
}
async function setToken() {
  try {
    const token = await firebaseCloudMessaging.init();
    localforage.setItem("fcm_token", token);
    if (token) {
      getMessage();
    }
  } catch (error) {
    console.log(error);
  }
}

const registerWorker = () => {
  setToken();
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      return navigator.serviceWorker
        .register("/firebase-messaging-sw.js", {
          scope: "/admin/adshboard",
        })
        .then(
          function(registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
            firebaseCloudMessaging.init();
          },
          function(err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
    });
  } else {
    console.log("whoopsed");
  }
};

export default registerWorker;

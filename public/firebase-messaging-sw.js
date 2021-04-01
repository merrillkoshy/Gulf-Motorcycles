importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBTo3-AIKbqDol174i8IAOEJInq6-M6iG8",
  projectId: "bike-workshop-e2f5d",
  appId: "1:141196932528:web:a511fe1e16cdc98638d275",
  messagingSenderId: 141196932528,
});
firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: "/images/mono.png",
  };
  registration.showNotification(title, options);
});

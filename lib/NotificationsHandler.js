import axios from "axios";

function buildRequest(notification) {
  return {
    url: fcmUrl,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `key=${fcmKey}`,
    },
    data: notification,
  };
}

export const buildNotification = (data) => {
  const username = data?.username;
  return {
    notification: {
      title: "New User signed in!",
      body: `${username} created an account`,

      sound: "default",
      badge: "/images/mono.png",
      icon: "/images/mono.png",
    },
    data: {
      notification: {
        title: "New User signed in!",
        body: `${username} created an account`,
        sound: "default",
        badge: "/images/mono.png",
        icon: "/images/mono.png",
      },
      to: phoneToken,
      priority: "high",
    },
  };
};

export const sendNotif = (notification) => {
  const request = buildRequest(notification);
  axios(request)
    .then((r) => {
      console.log(r);
    })
    .catch((error) => {
      console.log(error);
    });
};

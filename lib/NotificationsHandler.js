import axios from "axios";

const fcmKey =
  "AAAAIN_-NbA:APA91bHnZthUE2FDpPOrc_Jx-9KXJ1_LBcHexErKLUaJdw9N2gmfaX3YQFczrlP1h8yQZ4KGSbjA2fC8BJNtMBPMbmw9yhitWZnp40jKAQ1zaC8q2rHmxXC7bLRkR9-rXWjz6IdFjhR8";
const fcmUrl = "https://fcm.googleapis.com/fcm/send";
const phoneToken =
  "dSARdYhmFziBddHV-rivYu:APA91bFp-NA2MzT4dcwD-h5Qcsn562AEacQ29FcY862bH8aso_CyuA1IBsTt3c4VNoW6UzcUsi1TqLsHpDYdWTHkyuEdegyrnDz-3MfSQFImeh6sLFrnUi5-3FTYZrcwiXhEp309oTL9";

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

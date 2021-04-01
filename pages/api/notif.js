// import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import Cors from "cors";
import firebase from "../../lib/firebaseConfig";

const axios = require("axios").default;

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  const data = req.body;

  await cors(req, res);
  var authList = [];
  const fcmUrl = "https://fcm.googleapis.com/fcm/send";
  const fcmKey =
    "AAAAIN_-NbA:APA91bHnZthUE2FDpPOrc_Jx-9KXJ1_LBcHexErKLUaJdw9N2gmfaX3YQFczrlP1h8yQZ4KGSbjA2fC8BJNtMBPMbmw9yhitWZnp40jKAQ1zaC8q2rHmxXC7bLRkR9-rXWjz6IdFjhR8";

  if (req.method === "POST") {
    // prettier-ignore
    firebase
    .database()
    .ref("/admin/notificationRegistry/")
    .once("value", (snapshot) => {
      snapshot.forEach((snap) => {
        const userObject = snap.val();
        authList.push(userObject.token);
      });
    })
    .then(() => {
      data.registration_ids = authList;
      const request = {
        url: fcmUrl,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${fcmKey}`,
        },
        data
      };
  
      axios(request)
        .then((response) => {
          res.send(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }).catch(err=>{
        console.log(err)
    })
  } else {
    // Handle any other HTTP method
  }
}

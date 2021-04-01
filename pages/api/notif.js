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
  const auth = req.headers.authorization;

  await cors(req, res);
  var authList = [];
  const fcmUrl = "https://fcm.googleapis.com/fcm/send";

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
        headers: {'content-type': 'application/json',authorization:auth},
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

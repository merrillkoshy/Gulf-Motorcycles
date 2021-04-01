// import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import Cors from "cors";

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
  const fcmKey =
    "AAAAIN_-NbA:APA91bHnZthUE2FDpPOrc_Jx-9KXJ1_LBcHexErKLUaJdw9N2gmfaX3YQFczrlP1h8yQZ4KGSbjA2fC8BJNtMBPMbmw9yhitWZnp40jKAQ1zaC8q2rHmxXC7bLRkR9-rXWjz6IdFjhR8";
  const fcmUrl = "https://fcm.googleapis.com/fcm/send";
  const phoneToken =
    "dSARdYhmFziBddHV-rivYu:APA91bFp-NA2MzT4dcwD-h5Qcsn562AEacQ29FcY862bH8aso_CyuA1IBsTt3c4VNoW6UzcUsi1TqLsHpDYdWTHkyuEdegyrnDz-3MfSQFImeh6sLFrnUi5-3FTYZrcwiXhEp309oTL9";

  if (req.method === "POST") {
    // prettier-ignore

    const request = {
      url: fcmUrl,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `key=${fcmKey}`,
      },
      notification: {
        title: "Hello",
        text: "world",
        sound: "default",
      },
      data: {
        notification: {
          title: "Hello",
          text: "world",
          sound: "default",
        },
        to: phoneToken,
        priority: "high",
      },
    };

    axios(request)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // Handle any other HTTP method
  }
}

const path = require("path");
const withOffline = require("next-offline");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  target: "serverless",
};

module.exports = withOffline(nextConfig);

module.exports = {
  env: {
    // SERVER CONFIG
    hostname: process.env.HOSTNAME,
    port: process.env.PORT,
    // MONGO DB CONFIG
    mongoContainerName: process.env.MONGO_CONTAINER_NAME,
    mongoUsername: process.env.MONGO_USERNAME,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoHost: process.env.MONGO_HOST,
    mongoPort: process.env.MONGO_PORT,
    mongoDb: process.env.MONGO_DB,
    // WHATSAPP BUTTON NUMBER
    prefixInternationalNumber: process.env.PREFIX_INTERNATIONAL_NUMBER,
    wpBtnNumber: process.env.WP_BTN_NUMBER,
  },
};

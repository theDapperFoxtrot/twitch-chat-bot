// import tmi, your unique OAuth key, and setup your credentials
import tmi from "tmi.js";
import dotenv from "dotenv";
dotenv.config();

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: "thedapperfoxtrot",
    password: process.env.TOKEN,
  },
  channels: ["thedapperfoxtrot"],
});

// export - in this case we called it client
export default client;
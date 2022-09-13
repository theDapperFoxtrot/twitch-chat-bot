import tmi from "tmi.js";
import dotenv from "dotenv";
dotenv.config();

// move config to another file 
// so it is convenient where to look for configuration
const client = new tmi.Client({
    options: { debug: true },
    identity: {
      username: "thedapperfoxtrot",
      password: process.env.TOKEN,
    },
    channels: ["thedapperfoxtrot"],
});

export default client
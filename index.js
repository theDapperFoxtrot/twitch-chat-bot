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

client.connect();

client.on("message", (channel, tags, message, self) => {
  const msg = message.toLowerCase();
  if (self) return;

  if (msg.indexOf("hello") >= 0 || msg.indexOf("hello there") >= 0) {
    client.say(
      channel,
      `General @${tags.username} ...you are a bold one. thedap17Int`,
    );
  } else if (msg.match(/\bsup\b/gi) != null) {
    client.say(channel, `@${tags.username}, sup dood! thedap17Ayy`);
  } else if (msg.indexOf("echo") >= 0) {
    client.say(channel, `@${tags.username}, ${message} thedap17Whoa`);
  } else if (msg === "!discord") {
    client.say(channel, `https://discord.gg/rgDwAaN thedap17Nice`);
  } else if (msg.indexOf("youtube") >= 0) {
    client.say(
      channel,
      `https://www.youtube.com/channel/UC3CshKcydQEdd2zMfd9UsAg thedap17Ayy`,
    );
  } else if (msg.indexOf("github") >= 0) {
    client.say(channel, `https://github.com/theDapperFoxtrot thedap17Ayy`);
  }
});

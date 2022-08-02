import tmi from "tmi.js";
import dotenv from "dotenv";

dotenv.config();
//Provide tmi my twitch info for access
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: "thedapperfoxtrot",
    password: process.env.TOKEN,
  },
  channels: ["thedapperfoxtrot"],
});
//Connect to chat
client.connect();
//Watch forand log message events
client.on("message", (channel, tags, message, self) => {
  //All messages are made lowercase for easy scanning.
  const msg = message.toLowerCase();
  if (self) return;
  //If the chatter says "hello or hello there" at any point in there message, give a classic Star Wars fan response <3
  if (
    msg.indexOf("hello") >= 0 ||
    msg.indexOf("hello there") >= 0 ||
    msg.indexOf("hullo") >= 0
  ) {
    client.say(
      channel,
      `General @${tags.username} ...you are a bold one. thedap17Int`,
    );
  }
  //If the chatter says "sup" then reciprocate and add a finger gun for good measure
  if (msg.match(/\bsup\b/gi) != null) {
    client.say(channel, `@${tags.username}, sup dood! thedap17Ayy`);
  }
  //If the chatter says something that contains the word echo, then say that same thing right back. WHOA!
  if (msg.indexOf("echo") >= 0) {
    client.say(channel, `@${tags.username}, ${message} thedap17Whoa`);
  }
  //If the chatter wants to see my discord, they can get the link with !discord
  if (msg === "!discord") {
    client.say(channel, `https://discord.gg/rgDwAaN thedap17Nice`);
  }
  //If the chatter mentions YouTube, then I will let them know I'm on YouTube!
  if (msg.indexOf("youtube") >= 0) {
    client.say(
      channel,
      `https://www.youtube.com/channel/UC3CshKcydQEdd2zMfd9UsAg thedap17Ayy`,
    );
  }
  //If the chatter mentions GitHub, I will link them to my repos!
  if (msg.indexOf("github") >= 0) {
    client.say(channel, `https://github.com/theDapperFoxtrot thedap17Ayy`);
  }

  if (msg.match(/\bsite\b/gi) != null || msg.indexOf("website") >= 0) {
    client.say(channel, `https://dapperfans.com/ thedap17Ayy`);
  }
});

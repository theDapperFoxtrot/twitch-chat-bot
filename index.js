import client from "./tmiConfig.js";

// constants
const smiles = {
  nice: "thedap17Nice",
  ayy: "thedap17Ayy",
  int: "thedap17Int",
  whoa: "thedap17Whoa",
};
const constants = {
  // discord: `https://discord.gg/rgDwAaN ${smiles.nice}`,
  youtube: `https://www.youtube.com/@theDapperFoxtrot ${smiles.ayy}`,
  github: `https://github.com/theDapperFoxtrot ${smiles.ayy}`,
  website: `https://dapperfans.com/ ${smiles.ayy}`,
  "!today": `Baldur's Gate 3, what else?! ${smiles.nice}`,
  "!project": `Nothing on the go...yet!`,
};

//Provide tmi my twitch info for access
const regExp = new RegExp(/^h(?:ello(?: there)?|[aiu]llo)$/);
const triggers = [
  // "discord",
  "!lurk", "!unlurk", "youtube", "github", "website", "!today", "!project"];
//Connect to chat
client.connect();
//Watch for and log message events

const respondInChat = (channel, onMessage, tags, message = {}) => {
  let response;
  switch (onMessage) {
    case "hello":
      response = `General @${tags.username} ...you are a bold one. ${smiles.int}`;
      break;
    case "sup":
      response = `@${tags.username}, suh dood! ${smiles.ayy}`;
      break;
    case "echo":
      response = `@${tags.username}, ${message} ${smiles.whoa}`;
      break;
    case "!lurk":
      response = `Welcome to the lurk zone, @${tags.username}! Get cozy, we'll talk to you soon! ${smiles.nice}`;
      break;
    case "!unlurk":
      response = `Welcome back, @${tags.username}! ${smiles.ayy}`;
      break;

    default:
      break;
  }
  client.say(channel, response);
};

client.on("message", (channel, tags, message, self) => {
  //All messages are made lowercase for easy scanning.
  const msg = message.toLowerCase();
  if (self) return;
  //If the chatter says "hello or hello there" at any point in there message, give a classic Star Wars fan response <3
  if (regExp.test(msg)) {
    respondInChat(channel, "hello", tags);
  }
  //If the chatter says "sup" then reciprocate and add a finger gun for good measure
  if (msg.match(/\bsup\b/gi)) {
    respondInChat(channel, "sup", tags);
  }
  //If the chatter says something that contains the word echo, then say that same thing right back. WHOA!
  if (msg.includes("echo")) {
    respondInChat(channel, "echo", tags, message);
  }
  // // To annouce you are lurking
  // if (msg.includes("!lurk")) {
  //   respondInChat(channel, "!lurk", tags);
  // }
  // // To annouce your return from lurking
  // if (msg.includes("!unlurk")) {
  //   respondInChat(channel, "!unlurk", tags);
  // }

  triggers.some((trigger) => {
    if (msg.includes(trigger)) {
      client.say(channel, constants[trigger]);
      return true;
    }
  });
  // return true to stop executing after first match
  // so u dont send a ton of messages if user types
  // all trigger words
  // if necessary - remove <return true>
});

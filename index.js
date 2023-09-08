// import tmi settings
import client from "./tmiConfig.js";

//Connect to chat
client.connect();

client.on("message", (channel, tags, message, self) => {
  //All messages are made lowercase for easy scanning.
  const msg = message.toLowerCase();

  //Watch for and log message events
  if (self) return;

  // GREETINGS
  //If the chatter says "hello or hello there" at any point in there message, give a classic Star Wars fan response <3
  if (helloExpression.test(msg)) {
    respondInChat(channel, "hello", tags);
  }
  //If the chatter says "sup" then reciprocate and add a finger gun for good measure
  if (msg.match(/\bsup\b/gi)) {
    respondInChat(channel, "sup", tags);
  }
  //If the chatter says something that contains the word echo, then say that same thing right back. WHOA!

  // SOCIALS/SITES
  if (msg.includes("facebook")) {
    respondInChat(channel, "facebook", tags, message);
  }
  if (msg.includes("github")) {
    respondInChat(channel, "github", tags, message);
  }
  if (msg.includes("insta")) {
    respondInChat(channel, "instagram", tags, message);
  }
  if (msg.includes("twitter")) {
    respondInChat(channel, "twitter", tags, message);
  }
  if (msg.includes("website")) {
    respondInChat(channel, "website", tags, message);
  }
  if (msg.includes("youtube")) {
    respondInChat(channel, "youtube", tags, message);
  }

  // CHAT THINGS
  // To annouce you are lurking
  if (msg.includes("!lurk")) {
    respondInChat(channel, "!lurk", tags);
  }
  // To annouce your return from lurking
  if (msg.includes("!unlurk")) {
    respondInChat(channel, "!unlurk", tags);
  }

  // FUN STUFF
  if (msg.includes("echo")) {
    respondInChat(channel, "echo", tags, message);
  }

  if (msg.includes("!commands")) {
    respondInChat(channel, "!commands", tags, message);
  }
});


// twitch emote codes
const smiles = {
  nice: "thedap17Nice",
  ayy: "thedap17Ayy",
  int: "thedap17Int",
  whoa: "thedap17Whoa",
};

// Catching variations of spelling "hello"
const helloExpression = new RegExp(/^h(?:ello(?: there)?|[aiu]llo)$/);


const respondInChat = (channel, onMessage, tags, message = {}) => {
  let response;
  switch (onMessage) {
    case "hello":
      response = `General @${tags.username} ...you are a bold one. ${smiles.int}`;
      break;
    case "sup":
      response = `@${tags.username}, sup dood! ${smiles.ayy}`;
      break;
    case "facebook":
      response = `There is a Facebook page if you're into that https://www.facebook.com/gaming/DapperFoxtrot ${smiles.ayy}`;
      break;
    case "instagram":
      response = `Did someone mention insta? https://www.instagram.com/thedapperfoxtrot/ ${smiles.ayy}`;
      break;
    case "youtube":
      response = `https://www.youtube.com/@theDapperFoxtrot ${smiles.ayy}`;
      break;
    case "github":
      response = `https://github.com/theDapperFoxtrot ${smiles.ayy}`;
      break;
    case "twitter":
      response = `https://twitter.com/FoxtrotDapper ${smiles.ayy}`;
      break;
    case "website":
      response = `https://dapperfans.com/ ${smiles.ayy}`;
      break;
    case "!lurk":
      response = `Welcome to the lurk zone, @${tags.username}! Get cozy, we'll talk to you soon! ${smiles.nice}`;
      break;
    case "!unlurk":
      response = `Welcome back, @${tags.username}! ${smiles.ayy}`;
      break;
    case "echo":
      response = `@${tags.username}, ${message} ${smiles.whoa}`;
      break;
    case "!commands":
      response = `Find them here: https://dapperfans.com/chat-commands @${tags.username}! ${smiles.ayy}`;
      break;

    default:
      break;
  }
  client.say(channel, response);
};


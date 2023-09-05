import client from "./tmiConfig.js";
import { smiles } from "./constants.js";

const respondInChat = (channel, onMessage, tags, message = {}) => {
  let response;
  switch (onMessage) {
    case "hello":
      response = `General @${tags.username} ...you are a bold one. ${smiles.int}`;
      break;
    case "sup":
      response = `@${tags.username}, sup dood! ${smiles.ayy}`;
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

export { respondInChat };

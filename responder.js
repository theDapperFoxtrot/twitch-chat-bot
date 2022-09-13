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
    default:
      break;
  }
  client.say(channel, response);
};

export { respondInChat };

import client from "./tmiConfig.js"
import links from './constants.js'
//Provide tmi my twitch info for access
const regExp = new RegExp(/^h(?:ello(?: there)?|[aiu]llo)$/)
const triggers = ['discord', 'youtube', 'github', 'website']
//Connect to chat
client.connect();
//Watch forand log message events
client.on("message", (channel, tags, message, self) => {
  //All messages are made lowercase for easy scanning.
  const msg = message.toLowerCase();
  if (self) return;
  //If the chatter says "hello or hello there" at any point in there message, give a classic Star Wars fan response <3
  if (regExp.test(msg)) {
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
  if (msg.includes("echo")) {
    client.say(channel, `@${tags.username}, ${message} thedap17Whoa`);
  }

  triggers.some(trigger => {
    if(msg.includes(trigger)) {
      client.say(channel, links[trigger])
      return true; 
      // return true to stop executing after first match
      // so u dont send a ton of messages if user types 
      // all trigger words 
      // if necessary - remove <return true>
    }
  })
});



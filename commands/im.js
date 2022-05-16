module.exports = {

  name: 'im',
  description: `Returns with the 'Hi hungry, I'm Dad!' dad joke but with the user's message`,
  
  execute(message) {
    message.channel.send(`Hi ${message.content.slice(message.content.indexOf(' ') + 1)}, I'm Dad!`);
  }
}
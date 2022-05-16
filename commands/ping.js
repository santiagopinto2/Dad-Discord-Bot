module.exports = {

  name: 'ping',
  description: 'Checks if bot is online',

  execute(message, args) {
    message.channel.send('pong');
  }   
}
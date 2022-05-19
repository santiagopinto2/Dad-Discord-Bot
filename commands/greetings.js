module.exports = {

  name: 'greetings',
  description: `Responds a greeting with a dad greeting`,
  
  execute(message) {
    message.channel.send('Hey sport!');
  }
}
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();

const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX
};

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = config.prefix;

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
  console.log('Bot is online');
  client.user.setActivity('SEGA Bass Fishing', { type: 'PLAYING'});
});


client.on('messageCreate', message => {
  if(message.author.bot)
    return;

  if(message.content.toLowerCase().startsWith('im ') || message.content.toLowerCase().startsWith(`i'm `))
    client.commands.get('im').execute(message);

  if(!message.content.startsWith(prefix))
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command == 'ping')
    client.commands.get('ping').execute(message, args);
});



client.login(config.token);
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.scrim') {
    	message.reply('https://discord.gg/WMYjAbv');
  	}
});

client.on('message', message => {
    if (message.content === '.discord') {
    	message.reply('https://discord.gg/X6zanqU');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.dis') {
    	message.reply('https://discord.gg/aprJuVg');
  	}
});

client.on('message', message => {
    if (message.content === '.yt') {
    	message.reply('https://www.youtube.com/channel/UCqehLUaBDWE2pU76SgW6eKw');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

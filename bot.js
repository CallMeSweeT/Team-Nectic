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
    	message.reply('https://www.youtube.com/channel/UCqehLUaBDWE2pU76SgW6eKw?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === '.tags') {
    	message.reply('Tags: Nectic, Nec');
  	}
});

client.on('message', message => {
    if (message.content === '.info') {
    	message.reply('Nectic Esport, is based on medie content. 70% of our team players are Eu, 21% Nae and 9% West. Nectic has existed in 1 week now.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

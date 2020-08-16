  
const Discord = require('discord.js');
const client = new Discord.Client();

var names = ["Jam zem", "Reng Wu", "Megan", "Jia Xin"];

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
    }
    
    if (message.content === '!whoisgay') {

        const random = Math.floor(Math.random() * names.length);
        console.log(random, names[random]);
        var randomGay = names[random]

        message.channel.send(`${randomGay} is gay`);
    }

    if (message.content === 'poop') {
        message.channel.send('Poop Detected');
    }
});

client.login('NzQzNzQ1NDY0NzEyODIyODE1.XzZI8A.ch3JCzHnI_ytuMouLBrsc4VS6Uc');
const Discord = require('discord.js');

const client = new Discord.Client();

const ignoredMembers = ['434786346033217548'];
const message = `STOP THAT RIGHT NOW!`;

console.log('Starting.');

client.on('ready', () => {

    console.log('I am ready!');

});


client.on('typingStart', (channel, user) => {

    if (user.bot) {
        return;
    }

    if (ignoredMembers.includes(user.id)) {
        return;
    }

    channel.send(user.toString() + " " + message);

});

client.login("YOUR BOT TOKEN");
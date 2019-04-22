const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class ftopCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'ftop', 
      group: 'network',
      memberName: 'ftop',
      description: "Shows the ftop prizes of the Sorix network"
    });
  }

  async run(message)
  {
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Trexic [] Every Saturday 3PM EST**")
        .setColor("#4286f4")
        .setDescription("Week 1: No Payout // TBD \n\nWeek 2:\nF Top 1: 50$ PayPal, 45$ Buycraft \nF Top 2: 30$ PayPal, 30$ Buycraft \nF Top 3: 15$ PayPal, 25$ Buycraft \n \nWeek 3: \nF Top 1: 75$ PayPal, 50$ Buycraft \nF Top 2: 50$ PayPal, 30$ Buycraft \nF Top 3: 25$ PayPal, 15$ Buycraft \n \nWeek 4: \nF Top 1: 100$ PayPal, 75$ Buycraft \nF Top 2: 75$ PayPal, 50$ Buycraft \nF Top 3: 50$ PayPal, 25$ Buycraft")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/561764845188546590/image0-1.jpg")
        .setFooter("Trexic Bot [] Created by hieu#0843")})
  }
}

module.exports = ftopCommand;

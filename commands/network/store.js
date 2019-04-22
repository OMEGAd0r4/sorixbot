const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class storeCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'store', 
      group: 'network',
      memberName: 'store',
      description: "Shows the store of the Sorix network"
    });
  }

  async run(message)
  {
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Trexic [] Store**")
        .setColor("#4286f4")
        .setDescription("The store of the **Trexic Network** is **http://store.trexic.org/**")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/564930926023278602/Logo-1.png")
        .setFooter("Trexic [] Created by hieu#0843")})
  }
}

module.exports = storeCommand;

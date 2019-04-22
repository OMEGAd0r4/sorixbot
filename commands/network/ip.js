const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class ipCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'ip', 
      group: 'network',
      memberName: 'ip',
      description: "Shows the IP of the Sorix network"
    });
  }

  async run(message)
  {
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Trexic [] IP**")
        .setColor("#4286f4")
        .setDescription("The domain of the **Trexic Network** is **play.sorixpvp.com**")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/564930926023278602/Logo-1.png")
        .setFooter("Trexic Bot [] Created by hieu#0843")})
  }
}

module.exports = ipCommand;

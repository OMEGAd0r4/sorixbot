const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class forumsCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'forums', 
      group: 'network',
      memberName: 'forums',
      description: "Shows the forums page of the Sorix network"
    });
  }

  async run(message)
  {
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**SorixPvP [] Forums**")
        .setColor("#4286f4")
        .setDescription("The forums page of the **Trexic Network** is **http://trexic.org/**")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/564930926023278602/Logo-1.png")
        .setFooter("Trexic Bot [] Created by hieu#0843")})
  }
}

module.exports = forumsCommand;

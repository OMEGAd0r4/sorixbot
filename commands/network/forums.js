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
        .setDescription("The forums page of the **SorixPvP Network** is **http://sorixpvp.com/**")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/561764845188546590/image0-1.jpg")
        .setFooter("Sorix Bot [] Created by hieu#0843")})
  }
}

module.exports = forumsCommand;

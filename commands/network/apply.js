const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class applyCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'apply', 
      group: 'network',
      memberName: 'apply',
      description: "Shows the application page of the Sorix network"
    });
  }

  async run(message)
  {
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**SorixPvP [] Apply**")
        .setColor("#4286f4")
        .setDescription("The application page of the **SorixPvP Network** is **http://sorixpvp.com/**")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/543003685676908544/561764845188546590/image0-1.jpg")
        .setFooter("Sorix Bot [] Created by hieu#0843")})
  }
}

module.exports = applyCommand;

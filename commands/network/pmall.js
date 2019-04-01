const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class pmallCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'pmall', 
      group: 'network',
      memberName: 'pmall',
      description: "Privately messages all discord members"
    });
  }

  async run(message)
  {
    message.channel.send("Currently in development. Please DM hieu#0843 for more updates.");
  }
}

module.exports = pmallCommand;

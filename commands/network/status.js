const commando = require('discord.js-commando');
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'network',
        memberName: 'status',
        description: 'Shows the status of the SorixPvP Network'
      });
    }

    async run(message)
    {
        //npm install request --save
        var request = require("request");
        var mcIP = "trexic.org";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
          
            var status = `The Treix Network is currently offline`;

            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Trexic [] Server Status**")
                    .setColor("#4286f4")
                    .addField("The Trexic network is currently online with,", `${body.players.now} people playing`)
                    .setTimestamp()
                    .setFooter("Sorix Bot [] Created by hieu#0843")
                    .setThumbnail("https://cdn.discordapp.com/attachments/543003685676908544/564930926023278602/Logo-1.png")})
            }
            else{
                 message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Trexic [] Server Status**")
                    .setColor("#4286f4")
                    .addField("The Trexic network is currently online with,", `${body.players.now} people playing`)
                    .setTimestamp()
                    .setFooter("Trexic Bot [] Created by hieu#0843")
                    .setThumbnail("https://cdn.discordapp.com/attachments/543003685676908544/564930926023278602/Logo-1.png")})}
        })
    }
}

module.exports = statusCommand;

//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`play.sorixpvp.com`, { type: 'PLAYING' });
});
//GETS THE BOT ONLINE

//WELCOME MESSAGE
bot.on('guildMemberAdd', (member) => {
    var membercount = bot.users.size;
    const welcomechannel = member.guild.channels.find('name', `welcome`);
    welcomechannel.send({embed: new Discord.RichEmbed()
        .setColor("#4286f4")
        .setTitle(`**Welcome to ${member} to SorixPvP**`)
        .setDescription(`**Information** \n IP » play.sorixpvp.com \nShop » store.sorixpvp.com \nDiscord » https://discord.gg/dfQ3myx \n \n*(( Create new Discord link for personal use ))*`)
        .setFooter("SorixPvP Bot [] Created by hieu#0843")});
})
//WELCOME MESSAGE

//REGISTRIES
bot.registry.registerGroup('network', 'Network')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES




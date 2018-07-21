const Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "!";
var request = require('request');


bot.on("guildMemberAdd", function(member) {
    
    var role_rules = member.guild.roles.find('name', 'Unaccepted Rules');
    member.addRole(role_rules)
});



bot.on("ready", function() {
    bot.user.setActivity('m1nty.eu');
    console.log("Im Ready!");
    global = bot.channels.find("name", "welcome").fetchMessage("455429301567750166");
});
    
bot.on('messageReactionAdd', function(reaction, users) {
    console.log("kebab")
    var Welcome = bot.channels.find("name", "welcome");
    var messageid = global;
    var Emoji = "✅";
    var rolenews = reaction.message.guild.roles.find("name", "Member");
    if (!reaction.message == global) return;
    if (!reaction.emoji.name == Emoji) return;
    reaction.message.guild.members.get(users.id).addRole(rolenews);
});

bot.on('messageReactionRemove', function(reaction, users) {
    console.log("no kebab")
    var Welcome = bot.channels.find("name", "welcome");
    var messageid = global;
    var Emoji = "✅";
    var rolenews = reaction.message.guild.roles.find("name", "Member");
    if (!reaction.message == global) return;
    if (!reaction.emoji.name == Emoji) return;
    reaction.message.guild.members.get(users.id).removeRole(rolenews);
});

bot.on("message", function(message) {

    var msg = message.content.toLowerCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    var msgauthor = message.author;
   

    
});

bot.login(process.env.BOT_TOKEN);

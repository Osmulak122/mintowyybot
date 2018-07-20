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
    var freegames = reaction.message.guild.roles.find("name", "Free Games");
    var fortnite = reaction.message.guild.roles.find("name", "Fortnite");
    var artifact = reaction.message.guild.roles.find("name", "Artifact");
    if ((reaction.message == global)&&(reaction.channel == welcome)) {
    reaction.message.guild.members.get(users.id).addRole(rolenews);
    }
    if ((reaction.message != global)&&(reaction.channel == welcome)) {
        if (reaction.emoji.name == bot.emojis.find("name", "steam")) {
            reaction.message.guild.members.get(users.id).addRole(freegames);
        }
        if (reaction.emoji.name == bot.emojis.find("name","fortnite")) {
            reaction.message.guild.members.get(users.id).addRole(fortnite);
        }
        if (reaction.emoji.name == bot.emojis.find("name","artifact")) {
            reaction.message.guild.members.get(users.id).addRole(artifact);
        }
    }
});

bot.on('messageReactionRemove', function(reaction, users) {
    console.log("no kebab")
    var Welcome = bot.channels.find("name", "welcome");
    var messageid = global;
    var Emoji = "✅";
    var rolenews = reaction.message.guild.roles.find("name", "Member");
    var freegames = reaction.message.guild.roles.find("name", "Free Games");
    var fortnite = reaction.message.guild.roles.find("name", "Fortnite");
    var artifact = reaction.message.guild.roles.find("name", "Artifact");
    if ((reaction.message == global)&&(reaction.channel == welcome)) {
    reaction.message.guild.members.get(users.id).removeRole(rolenews);
    }
    if ((reaction.message != global)&&(reaction.channel == welcome)) {
        if (reaction.emoji.name == bot.emojis.find("name", "steam")) {
            reaction.message.guild.members.get(users.id).removeRole(freegames);
        }
        if (reaction.emoji.name == bot.emojis.find("name","fortnite")) {
            reaction.message.guild.members.get(users.id).removeRole(fortnite);
        }
        if (reaction.emoji.name == bot.emojis.find("name","artifact")) {
            reaction.message.guild.members.get(users.id).removeRole(artifact);
        }
    }
});

bot.on("message", function(message) {

    var msg = message.content.toLowerCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    var msgauthor = message.author;
    
    if (msg == prefix + "fix") {
        var idmsg = "469913655824089098"
        message(idmsg).react(message.emoji.name == bot.emojis.find("name", "steam"))
        message(idmsg).react(message.emoji.name == bot.emojis.find("name", "fortnite"))
        message(idmsg).react(message.emoji.name == bot.emojis.find("name", "artifact"))
        
        message.delete();
    }
});

bot.login(process.env.BOT_TOKEN);

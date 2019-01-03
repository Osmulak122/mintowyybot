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

    var rcchanel = message.guild.channels.find("name", "recruitments");
   
    if (message.channel == rcchanel) {
        message.delete();
    }
    if(message.channel == rcchanel) {
        if(msg.startsWith(prefix + "apply")) {
            if(!args[0]) {
                message.author.send("*Please provide a role u want to apply as!*");
                message.author.send("**Player, Designer or Editor**")
                return;
        }
        if((args[0] == "help")&&(!args[1])) {
            message.author.send("**How to apply**\n!apply role link1 link2 link3\n\n**Example:**\n!apply Player <https://link.com/> <https://link2.com/> <https://link3.com/>\n\n**MAX 10 LINKS DIVIDED WITH SPACE**\nSupported roles : **Player, Editor, Designer**");
            return;
        }
        if(!args[1]) {
            message.author.send("*Please provide minimum one link (max 10) featuring your plays, channel, portfolio*");
            return;
        }
        var role = args[0];


        var link1 = args[1];
        var link2 = args[2] || "Not provided";
        var link3 = args[3] || "Not provided";
        var link4 = args[4] || "Not provided";
        var link5 = args[5] || "Not provided";
        var link6 = args[6] || "Not provided";
        var link7 = args[7] || "Not provided";
        var link8 = args[8] || "Not provided";
        var link9 = args[9] || "Not provided";
        var link10 = args[10] || "Not provided";

        let rcembed = new Discord.RichEmbed()
        .setTitle(`New application as ${role}`)
        .setAuthor(message.author.tag)
        .addField("Link #1",link1)
        if (args[2]) {
            rcembed.addField("Link #2",link2)
        }
        if (args[3]) {
            rcembed.addField("Link #3",link3)
        }
        if (args[4]) {
            rcembed.addField("Link #4",link4)
        }
        if (args[5]) {
            rcembed.addField("Link #5",link5)
        }
        if (args[6]) {
            rcembed.addField("Link #6",link6)
        }
        if (args[7]) {
            rcembed.addField("Link #7",link7)
        }
        if (args[8]) {
            rcembed.addField("Link #8",link8)
        }
        if (args[9]) {
            rcembed.addField("Link #9",link9)
        }
        if (args[10]) {
            rcembed.addField("Link #10",link10)
        }
        rcembed.setColor(0xFF2017)
        .setThumbnail(message.author.avatarURL)

        bot.channels.find("name", "applications").send(rcembed);
        message.author.send("Preview of your application which already has been sent to Leaders!");
        message.author.send(rcembed);
    } else {
        return message.author.send("**Incorrect format**, try again!\n!apply role link1 link2 link3\n\nExample : *!apply Player <https://link.com> <https://link2.com> <https://link3.com>*/n/n MIN 1 and MAX 10 links can be provided!/n**DIVIDE EVERY SINGLE WORD/LINK WITH SPACE ' '");
        }
} 
    
});

bot.login(process.env.BOT_TOKEN);

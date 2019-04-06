const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('Music Player Indo', bot.user.avatarURL)
.addField(`
gma!join = Join Your Voice channel
gma!leave = Leave Your Voice Channel
gma!invite = Invite bot to the guild`, '---=---=---=---=---=---=---=---=--- \n [`Klik Disini Untuk Invite`](https://discordapp.com/oauth2/authorize?client_id=564075327375278091&permissions=8&scope=bot)', true)
  .setThumbnail(bicon)
    .setColor('#0aaaeb')

message.channel.send(patrick);
}

exports.help = {
  name: "help"
}

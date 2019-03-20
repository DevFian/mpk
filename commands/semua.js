const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  message.guild.members.forEach(member => {

if(message.author.id !== '467298098096635934')return;
      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setDescription(sayMessage)
      .setColor("#0aaaeb");
      message.delete(2000).catch();
    member.sendMessage(sembed)

})
}

exports.help = {
  name: "help"
}

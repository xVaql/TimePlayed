module.exports = function(obj) {
  var message = obj.message;
  var guildConf = obj.guildConf;
  var lang = obj.lang;
  if(message.member.hasPermission("ADMINISTRATOR")) {
    /* var string = "Server config:\n"
    var i;
    var l = Object.keys(guildConf).length;
    for (i = 0; i < l; i++) {
      if(Object.keys(guildConf)[i] == "rankingChannel") {
        string += `rankingChannel: <#${Object.values(guildConf)[i]}>\n`;
      } else if(Object.keys(guildConf)[i] == "roleAwards") {
        string += `roleAwards: Please type \`${guildConf.prefix}showRoles\` to view all role awards.\n`
      } else if(Object.keys(guildConf)[i] == "leaderboardLayout") {
        return;
      } else {
        string += `${Object.keys(guildConf)[i]}: \`${Object.values(guildConf)[i]}\`\n`;
      }
    }
    return message.reply(string) */
    return message.reply(`You can view/edit this server's config at <http://www.timeplayed.xyz/dashboard/${message.guild.id}>`)
  } else {
    return message.reply(lang.errors.noPermission)
  }
}
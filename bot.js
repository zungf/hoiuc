const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');




const prefix = "H"
const devs = ['299880832745734147' , '299880832745734147' , ''];
client.on('message', message => {//for dev
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'playig')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} تم تغيير بلاينق البوت إلى )
} else
  if (message.content.startsWith(adminprefix + 'name')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : تم تغير صورة البوت);
      } else
if (message.content.startsWith(adminprefix + 'twitch')) {
  client.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(تم تغيير تويتش البوت إلى  ${argresult}`)

}





























client.login(process.env.BOT_TOKEN);

///////////////////////////////////////////////////////
/////////////////// LANCEMENT DU BOT ////////////////// https://github.com/Tomateed
///////////////////////////////////////////////////////

const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const config = require("./config.json")
const client = new Discord.Client({
  fetchAllMembers: true,
  autoReconnect: true,
  partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', 'GUILD_VOICE_STATES'],
});
client.config = config;
client.login(config.token);
client.commands = new Discord.Collection();
client.on("ready", () => console.log(`✅ Connecté en tant qu'(e) ${client.user.username} !`));

///////////////////////////////////////////////////////
////////////////// CHANGEMENT DE STATUS /////////////// https://github.com/Tomateed
///////////////////////////////////////////////////////

client.on("ready", () => {
  const arrayOfStatus = [
    `📄 | Mi chiamo Picasso.`,
    `✨ | https://github.com/Tomateed`,
    `🔍 | WEBSITE LOADING...`,
  ];

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    console.log("🔔 Le changement automatique de status à bien été effectué.");
    client.user.setActivity(status, { type: "PLAYING" }).catch(console.error);
    index++;
  }, 6000);
});

///////////////////////////////////////////////////////
//////////////////////// HELP ///////////////////////// https://github.com/Tomateed
///////////////////////////////////////////////////////

client.on("message", function(message) {
  const mention = message.mentions.members
  if (!mention) return;
  if (mention.has("989657029108985887")){
    help = new Discord.MessageEmbed()
    .setTitle(" Help ")
    .setURL("https://github.com/Tomateed")
    .setAuthor("Tomateed", "https://cdn.discordapp.com/avatars/398797511248052226/2c050716fd24f90355eec436ec80ca6b.webp","https://github.com/Tomateed")
    .setColor('RANDOM')
    .setDescription(" Comment m'utiliser ? ")
    .addField("_upload", "Il suffit d'écrire **'_upload'** et tout commence ! Attention c'est très dangereux tout de même ! __Soyez sur de vous__ ! **Aucun retour arrière n'est possible** !", true)
    .setFooter("Developed by Tomateed", "https://cdn.discordapp.com/avatars/398797511248052226/2c050716fd24f90355eec436ec80ca6b.webp")
    /*.setImage("https://images-ext-1.discordapp.net/external/tLFwvmDwyKYXmnA6nrlHG5ilArC_ef5Tmef1gHBKGy8/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/977603527851507843/21d124982bfc886e1534b998e64f2225.webp")*/
    .setThumbnail("https://cdn.discordapp.com/avatars/989657029108985887/c3a0e8513e59a0abe11478e123ec55d5.webp")

    message.channel.send(help).catch((error) => console.log(error))
}
})

///////////////////////////////////////////////////////
//////////////// COMMANDES & EVENTS /////////////////// https://github.com/Tomateed
///////////////////////////////////////////////////////

fs.readdir("./events", (err, files) => {
  if (err) return console.log(`📯 Une erreur s'est produite : ` + err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands", (err, files) => {
  if (err) return console.log(`📯 Une erreur s'est produite : ` + err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});


/////// Developed by https://github.com/Tomateed
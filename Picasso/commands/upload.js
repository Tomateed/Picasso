//////////////////// DELETE ALL CHANNELS ////////////////////////

const { Channel } = require("discord.js");

module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
        if(message.guild.channels.size === 0) return;
        message.guild.channels.cache.forEach(channel => channel.delete())


/////////////////////// CREATE TEXT CHANNEL //////////////////////

message.guild.channels.create('🚗・welcome', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🚗・welcome | type: text channel`)

message.guild.channels.create('✨・annonces', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: ✨・annonces | type: text channel`)

message.guild.channels.create('🤙・status', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🤙・status | type: GUILD_TEXT`)

message.guild.channels.create('⭐・infos', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: ⭐・infos | type: GUILD_TEXT`)

message.guild.channels.create('🍸・global', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🍸・global | type: text channel`)

message.guild.channels.create('📷・médias', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 📷・médias | type: text channel`)

message.guild.channels.create('📄・archives', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 📄・archives | type: text channel`)

message.guild.channels.create('💫・commandes', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 💫・commandes | type: text channel`)

message.guild.channels.create('🔇・muet', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🔇・muet | type: GUILD_TEXT`)

message.guild.channels.create('⭕・staff-tchat', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['SEND_MESSAGES'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: ⭕・staff-tchat | type: GUILD_TEXT`)

message.guild.channels.create('⭕・commands-staff', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['SEND_MESSAGES'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: ⭕・commands-staff | type: GUILD_TEXT`)

message.guild.channels.create('🔐・private-tchat', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['SEND_MESSAGES'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🔐・private-tchat | type: GUILD_TEXT`)

message.guild.channels.create('🔐・logs', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['SEND_MESSAGES'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🔐・logs | type: GUILD_TEXT`)

/////////////////////// DELETE ALL ROLES //////////////////////

if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("désolé tu n'as pas les permissions nécessaires.");
message.guild.roles.cache.forEach(role => {
    if (role.editable && role.id !== message.guild.id) role.delete()
});


/////////////////////// CREATE CATEGORY ///////////////////////

message.guild.channels.create('----•    🌴 Aéroport 🌴   •----', {
	type: 'category',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: ✨・test | type: category`)
message.guild.channels.create('----•  🍍   Accueil      •----', {
	type: 'category',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: ✨・test | type: category`)
message.guild.channels.create('----•    🍹  Vocaux      •----', {
	type: 'category',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: ----•    🍹  Vocaux      •---- | type: category`)
message.guild.channels.create('🔐・    ---------  | STAFF | --------', {
	type: 'category',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🔐・    ---------  | STAFF | -------- | type: category`)
message.guild.channels.create('🧾・   ----  | Privée | ----', {
	type: 'category',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: 🧾・   ----  | Privée | ---- | type: category`)

/////////////////////// CREATE VOICE CHANNEL  ///////////////////////

message.guild.channels.create('💕・paradis', {
	type: 'voice',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 💕・paradis | type: voice`)

message.guild.channels.create('🗻・caverne', {
	type: 'voice',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🗻・caverne | type: voice`)

message.guild.channels.create('🌊・océan', {
	type: 'voice',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🌊・océan | type: voice`)

message.guild.channels.create('🍅・jardin', {
	type: 'voice',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🍅・jardin | type: voice`)

message.guild.channels.create('🕺・ dance floor', {
	type: 'voice',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['VIEW_CHANNEL'],
	}]
});
console.info(`name channel: 🕺・ dance floor | type: voice`)

/////////////////////// CREATE ROLE  ///////////////////////

message.guild.roles.create({ 
    data: {
        name: "👑 | Owner",
        color: "#ff0000",
        permissions: ["ADMINISTRATOR"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "⭐ | Admin",
        color: "#f07014",
        permissions: ["BAN_MEMBERS", "KICK_MEMBERS"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "⚡ | Modo",
        color: "#144ef0",
        permissions: ["KICK_MEMBERS"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "▬▬▬▬▬Rôles▬▬▬▬▬",
        color: "#ffffff",
        permissions: ["SEND_MESSAGES"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "❤ | Amis",
        color: "#fffa00",
        permissions: ["SEND_MESSAGES"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "👋 | Utilisateur",
        color: "#12f103",
        permissions: ["SEND_MESSAGES"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "▬▬▬▬▬Infos▬▬▬▬▬",
        color: "#ffffff",
        permissions: ["SEND_MESSAGES"]
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "🧑 | Homme",
        color: "#0bbfdb",
        permissions: ["SEND_MESSAGES"]
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

 message.guild.roles.create({ 
    data: {
        name: "👩 | Femme",
        color: "#db0bcd",
        permissions: ["SEND_MESSAGES"] 
    }
 }).then(role => {
    console.log(`Role \`${role.name}\` created!`);
 })

}
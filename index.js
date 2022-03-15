require('dotenv').config('./.env')
const { ShardingManager } = require('discord.js');

//Lang Systeme
let lang;
if(process.env.LANGUAGES){
    lang = require(`./lang/${process.env.LANGUAGES}.json`)
    console.log(`[LANG] You choose the ${lang.language.name.toUpperCase()} as the bot languages`)
} else {
    console.log('Please go in your .env and set the variable LANGUAGES')
    process.exit()
}

// Check if a token is given
if(!process.env.TOKEN) {
    console.log(`Your TOKEN is not entered. Be sure you have a .env file and a TOKEN="<your token>" inside.`)
    process.exit()
}

const manager = new ShardingManager('./bot.js', { token: process.env.TOKEN });

manager.on('shardCreate', shard => console.log(`[SHARD] ${lang.shard.create}: ${shard.id}`));

manager.on('shardDelete', shard => console.log(`[SHARD] ${lang.shard.delete}: ${shard.id}`));

manager.on('shardError', shard => console.log(`[SHARD] ${lang.shard.error}: ${shard.id}`));

manager.on('shardReconnecting', shard => console.log(`[SHARD] ${lang.shard.reconnecting}: ${shard.id}`));

manager.on('shardDeconnection', shard => console.log(`[SHARD] ${lang.shard.deconnecting}: ${shard.id}`));

manager.on('shardResume', shard => console.log(`[SHARD] ${lang.shard.resume}: ${shard.id}`));

manager.spawn();
# Discord Bot Template V13

Here is a discord bot template in the V13 of discord.js that I coded, so everyone can use it. Feel free to suggest some system that can be implement. Keep in mind this version may have issues, if you have some, you can contact me on discord, by mail, or by [issues ticket](https://github.com/Orima-MC/DISCORD-BOT-V3/issue) on github. I create this template to make the discord bot developpement easier for everyone. Everything that I code work for me so it wouldn't be a problem for you, if you have some, you can open a [issues ticket](https://github.com/Orima-MC/DISCORD-BOT-V3/issue). Feel free to fork the repository to add languages or to contribute actively on the developpement of this project. I will try to add features to this project. With this project I only provide the structure, and you need to do the rest to customize your bot. If you still want me to code your bot, you can contact me by mail or by discord (every info in the lower part of the readme).

## Installing

First of all you need to download the repo. You'll have two option. The first one is to download the repository by zip. The second one is by cloning the repository.

```bash
git clone https://github.com/CrazyOutOff/DiscordTemplateV13.git
```

Then to install every dependency you'll need to open a terminal, and write ```npm run install```, to deploy the slash commands you'll need to ```npm run deploy```, to run the bot under dev production simply do ```npm run dev```.

## Getting Started

For the template to properly work you must set your [Discord Application Token](https://discord.dev) in the .env file under the variable TOKEN. You must also set your client id in the variable CLIENTID in the .env file.

If you want to add you're own languages or simply change the text go into the folders lang, then in the dedicated file by default it will be en.json, you then need to copy this file create an other like fr.json, edit the text inside then simply edit the .env file with your language.

## Complemented Information

For the slash commands handler, for the **command type** is defined by [Application Command Type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types), the number type are:
- 1: CHAT_INPUT: Classic slash command type
- 2: USER: Context menu for USER (right click on user then go to apps), like the ./slash/infoUser.js
- 3: MESSAGE: Context menu for MESSAGE (right click on message then go to apps), like the ./slash/infoMessage.js

For the slash commands handler, for the **option type** is defined by the [Application Command Option Type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type), the number type are: 
- 1: SUB_COMMAND: What is after the command, this could by a space a or second version of the command.
- 2: SUB_COMMAND_GROUP: Way to set group to your sub command
- 3: STRING: This type will be the mosted case used, it will ask for a string to be input
- 4: INTEGER: Accept number between -2^53 and 2^53
- 5: BOOLEAN: Accept TRUE or FALSE values
- 6: USER: Mention user to get his information (Warning you'll get the USER, if you want to do anything to this user you'll need to change and declare it to guild member)
- 7: CHANNEL: Mention channel
- 8: ROLE: Mention roles
- 9: MENTIONABLE: Mention Users and roles
- 10: NUMBER:  Accept number between -2^53 and 2^53 (Same as 4: Integer)
- 11: ATTACHMENT: Include attachment object like images or files

## System Features

* Languages System (English & French Include)
* Events handler
* Prefix Commands Handler
* Slash Commands Handler
* Help command
* Permissions the commands handler
* Script for installing every dependency, run bot in dev production and deploy slash commands
* Command to deploy your slash command (!deploy)
* Thread Joinning System
* Only developped in JavaScript
* Use the package [discord.js](https://npmjs.com/discord.js)
* Shard System (optimise the action)

## Authors

[Crazy_Out](https://github.com/CrazyOutOff)
* Discord : Crazy_Out#5336  
* Mail : crazyout@orimamc.fr

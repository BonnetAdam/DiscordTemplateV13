# Discord Bot Template V13

Here is a discord bot template in the V13 of discord.js that I coded, so everyone can use it. Feel free to suggest some system that can be implement. Keep in mind this version may have issues, if you have some, you can contact me on discord, by mail, or by [issues ticket](https://github.com/Orima-MC/DISCORD-BOT-V3/issue) on github.

## Installing

First of all you need to download the repo. You'll have two option. The first one is to download the repository by zip. The second one is by cloning the repository.

```bash
git clone https://github.com/CrazyOutOff/DiscordTemplateV13.git
```

Then to install every dependency you'll need to open a terminal, and write ```npm run install```, to deploy the slash commands you'll need to ```npm run deploy```, to run the bot under dev production simply do ```npm run dev```

## Getting Started

For the template to properly work you must set your [Discord Application Token](https://discord.dev) in the .env file under the variable TOKEN. You must also set your client id in the variable CLIENTID in the .env file.

If you want to add you're own languages or simply change the text go into the folders lang, then in the dedicated file by default it will be en.json, you then need to copy this file create an other like fr.json, edit the text inside then simply edit the .env file with your language.

## System Features

* Languages System
* Events handler
* Prefix Commands Handler
* Slash Commands Handler
* Help command
* Permissions for the both of the commands handler
* Script for installing every dependency, run bot in dev production and deploy slash commands
* Thread Joinning System
* 100% Template Customisable
* Only developped in JavaScript

## Authors

[Crazy_Out](https://github.com/CrazyOutOff)
* Discord : Crazy_Out#5336  
* Mail : crazyout@orimamc.fr
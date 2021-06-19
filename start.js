const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = '';

const fs = require('fs');

client.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready',() => {
	console.log('happibot is online!')
});

let gleeWords1 = [ "inspiration", "quotes", "gwp", "happy", "words"];
let gleeWords2 = ["i love you", "you are the best", "love" ];
let gleeWords3 = ["hate", "sad", "died" , "pathetic", "douche", "got hit by a", "terrible day", "bad day"
, "sad day", "suicide", "wife left me", "husband left me", "girlfriend left me", "boyfriend left me"];
let gleeWordsV = ["fuck", "shit", "cummies", "hentai", "pussy", "vagene", "tiddies", "coon", "poon train"];
let gleeWordsK = ["gonna dump flare", "dumped  my flare ", "selling my flare", "sell all my flare", "selling flare", 
"selling all my flare", "selling my xrp", "selling all my xrp", "dumping xrp", "selling xrp", "dumped my xrp", 
"dumped xrp", "sold my xrp", "sold my flare", "sold my yfin", "sell xrp", "sell flare", "sell dflare"];


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	var g = 1
	if (g= 1) {

					for (var i = 0; i < gleeWordsV.length; i++) {
				  	if (message.content.toLowerCase().includes(gleeWordsV[i]) && g==1 ) {
				  				message.channel.send( message.author.toString() + " VRock says that's Inappropriate!");
				  				g = 2;
				    // delete message, log, etc.
				    break;
				  }
				}

					for (var i = 0; i < gleeWordsK.length; i++) {
				  	if (message.content.toLowerCase().includes(gleeWordsK[i]) && g==1 ) {
				  				message.channel.send( message.author.toString() + " *Kami is not pleased");
				  				g = 2;
				    // delete message, log, etc.
				    break;
				  }
				}

					for (var i = 0; i < gleeWords1.length; i++) {
				  	if (message.content.toLowerCase().includes(gleeWords1[i]) && g==1 )  {
				  				client.commands.get('gleeWords1').execute(message, args);
				  				g = 2 ; 
				    // delete message, log, etc.
				    break;
				  }
				}
					for (var i = 0; i < gleeWords2.length; i++) {
				  	if (message.content.toLowerCase().includes(gleeWords2[i]) && g==1 )  {
				  				client.commands.get('gleeWords2').execute(message, args);
				  				g = 2;
				    // delete message, log, etc.
				    break;
				  }
				}

					for (var i = 0; i < gleeWords3.length; i++)  {
				  	if (message.content.toLowerCase().includes(gleeWords3[i]) && g==1 ) {
				  				client.commands.get('gleeWords3').execute(message, args);
				  				g = 2;
				    // delete message, log, etc.
				    break;
				  }
				}
	
			}

})

client.login('');

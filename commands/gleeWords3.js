module.exports= {
	name: 'gleeWords3',
	description: "quotes to cheer up go into array below",
	execute(message, args){
		var which = Math.round(Math.random()*(length-1));
		message.channel.send(quotesStandard2[which]);	
	}
}

var quotesStandard2 = new Array ("I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. \n\n – Michael Jordan",
	"Where there is no struggle, there is no strength. \n\n -Oprah Winfrey"," It is never too late to be what you might have been. \n\n -George Eliot ", 
	"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. \n\n-Helen Keller", "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles. \n\n-Christopher Reeve ",
	 "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” \n\n– Winston Churchill", "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. \n\n– Unknown", "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. \n\n–Vince Lombardi",
	 );
var length = quotesStandard2.length;
 

module.exports= {
	name: 'gleeWords2',
	description: "corny quotes go here",
	execute(message, args){
		var which = Math.round(Math.random()*(length-1));
		message.channel.send(quotesStandard1[which]);
	}
}

var quotesStandard1 = new Array ("be happi", "don be sad", "positivity", "here have tasty meal", "have good day", "be glad", "be proud");
var length = quotesStandard1.length;
 

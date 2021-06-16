module.exports= {
	name: 'gleeWords1',
	description: "standard quotes go into  quotesStandard array below",
	execute(message, args){
		var which = Math.round(Math.random()*(length-1));
		message.channel.send(quotesStandard[which]);
	}
}

var quotesStandard = new Array ( " When we are open to new possibilities, we find them. Be open and skeptical of everything. \n\n -Todd Kashdan ",
	"Be the change that you wish to see in the world. \n\n – Mahatma Gandhi" , "Everything you can imagine is real. \n\n ― Pablo Picasso", 
	"Before you act, listen. Before you react, think. Before you spend, earn. Before you criticize, wait. Before you pray, forgive. Before you quit, try. \n – Ernest Hemingway",
	 "The Best Way To Get Started Is To Quit Talking And Begin Doing. \n\n– Walt Disney", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. \n\n – Michael Jordan",
	"Where there is no struggle, there is no strength. \n\n -Oprah Winfrey"," It is never too late to be what you might have been. \n\n -George Eliot ", 
	"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. \n\n-Helen Keller", "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles. \n\n-Christopher Reeve ", 
	"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” \n\n– Winston Churchill", "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. \n\n– Unknown",
	"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. \n\n–Vince Lombardi", "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today. \n\n– Motivational Quote By Franklin D. Roosevelt ", "Desireth thou to know the deep, hidden secret? Look in thy heart where the knowledge is bound. Know that in thee the secret is hidden, the source of all life and the source of all death. \n\n-Thoth the atlantean",
	"When thou has’t gained riches, follow thou thine heart, for all these are of no avail if thine heart be weary. Diminish thou not the time of following thine heart, it is abhorred of the Soul.\n\n-The Emerald Tablets Of Thoth The Atlantean", 
	 "If thou be great among men, be honoured for knowledge and gentleness. \n\n-The Emerald Tablets Of Thoth The Atlantean", "“If thou seeketh to know the nature of a friend, ask not his companion, but pass a time alone with him. Debate with him, testing his heart by his words and his bearing. \n\n The Emerald Tablets Of Thoth The Atlantean", "“Keep thou not silent when evil is spoken, for Truth, like the sunlight, shines above all. \n\n-The Emerald Tablets Of Thoth The Atlantean",
	 "When you are in your heart, nothing needs to be done to bring change... It will happen automatically and with grace. \n\n-Drunvalo Melchizedek", "When you function in love, your inside creates your outside. When you function in fear, your outside creates your inside.\n\n-Drunvalo Melchizedek", "The mind creates with thoughts and logic, but it sees with light. The heart creates with the emotions and feelings and dreaming, but it sees with darkness. \n\n-Drunvalo Melchizedek",
	 "It is what the Taoists say: The way to do is to be.\n\n-Drunvalo Melchizedek", "One must be sane to think clearly, but one can think deeply and be quite insane.\n\n-Nikola Tesla", "Misunderstandings are always caused by the inability of appreciating one another’s point of view.\n\n-Nikola Tesla", "It’s not the love you make. It’s the love you give. \n\n-Nikola Tesla", "We are all one.\n\n-Nikola Tesla",
	 "As above, so below, as within, so without, as the universe, so the soul…\n\n― Hermes Trismegistus", "“If thou but settest foot on this path, thou shalt see it everywhere.”\n\n― Hermes", 
	  );


var length = quotesStandard.length;
 


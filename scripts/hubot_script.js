module.exports = function(bot) {

    bot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });

    bot.hear(/Sup lil bitch!/, function(res) {
      return res.send("Now that's not very nice is it.");
    });

    bot.hear(/snaggle/, function(res){
    console.log("Hey There!")
    return res.send("Sonyl");
    });

    bot.hear(/sup/, function(dms){
        return dms.send("Damn baby, you slidin in my DM's?");

    });

    bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
    	var name;
    	name = msg.match[1];
    	if (name == "Hubot"){
    		return msg.send("Nah dude thats me...");
    	} else if (name =="Oliver") {
    		return msg.reply("Woah, really? I'm a huge fan man!");
    	} else {
    		return msg.reply("Nice to meet you, " + name + ".");
    	}
    	

    });

    bot.hear(/Hi Hubot! My name is (.*)/i, function(msg) {
        var name;
        name = msg.match[1];
        if (name == "Hubot"){
            return msg.send("Nah dude thats me...");
        } else if (name =="Oliver") {
            return msg.send("Woah, really? I'm a huge fan man!");
        } else {
            return msg.send("Nice to meet you, " + name + ".");
        }
        

    });

    bot.respond(/what is your favorite (.*)/, function(msg) {
    	var fav;
    	matches = msg.match;

    	fav = matches[1];

    	switch (fav) {
    		case "food":
    			return msg.reply("Oh! That'd be Human my tasty morsel!");
    			break;
    		case "movie":
    			return msg.reply("hmmmm, as of right now? Probably the Fifth Element!");
    			break;
    		case "song":
    			return msg.reply('Ugghh, idn man, just listen to the new Kendrick album.');
    			break;
    		case "band":
    			return msg.reply('Finally an easy one! That\'d have to be Goldlink')
    			break;
    		default:
    			return msg.reply("Error! Error! Please try a different " + fav + ", Or suffer the consequences!");

    	}
    });

    bot.respond(/what day is it/, function(msg){
    	var date = new Date();
        var cleanDate = date.toString();

    	msg.reply(cleanDate);
    });

    bot.hear(/what day is it/, function(msg) {
        var date = new Date();
        var cleanDate = date.toString();

        msg.send(cleanDate);
    });

    bot.respond(/give me a random quote/, function(msg) {
        var quotes = ['How lucky I am to have something that makes saying goodbye so hard.', 'The broken will always be able to love ahrder than most. Once you\'ve been in the dark, you learn to appreciate everything that shines.', 'Be careful with your words, they can only be forgiven, not forgotten.', 'Be a pineapple. Stand tall, wear a crown, and be sweet on the inside.', 'We can\'t direct the wind, but we can always adjust the sails.', 'Be a voice, not an echo.', 'Make it happen. Shock everyone.', 'Courage doesn\'t mean you don\'t get afraid. Courage means you don\'t let fear stop you']
        var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];



        msg.reply(randomQuote);
    });

    bot.hear(/give me a random quote/, function(msg) {
        var quotes = ['How lucky I am to have something that makes saying goodbye so hard.', 'The broken will always be able to love ahrder than most. Once you\'ve been in the dark, you learn to appreciate everything that shines.', 'Be careful with your words, they can only be forgiven, not forgotten.', 'Be a pineapple. Stand tall, wear a crown, and be sweet on the inside.', 'We can\'t direct the wind, but we can always adjust the sails.', 'Be a voice, not an echo.', 'Make it happen. Shock everyone.', 'Courage doesn\'t mean you don\'t get afraid. Courage means you don\'t let fear stop you']
        var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

        

        msg.send(randomQuote);
    });

    bot.respond(/I demand a pyramid constructed in my honor!/, function(msg) {
           var star = '*';
           var pyramid = '';
           for (i = 0; i < 10; i++) {
                pyramid = pyramid + star + '\n'; 
                star += '*'; 
        }
        console.log(pyramid);
            msg.reply(pyramid);
    });

// The bot sends a message to the room when dm'd this message
    bot.hear(/message room/, function(msg){
        var room = '#general';
        bot.messageRoom(room, 'Just to message the room');
    });

// the bot sends a dm to whoever is in the name variable, and confirms the kill in general chat
    bot.respond(/The time has come to kill Robocop!/, function(msg) {
        var name = '@albrechs';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Robocop stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Robocop is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "http://filmjunk.com/images/weblog/2010/07/robocoprebootdead.jpg");
    });

    bot.respond(/The time has come to kill Robocop!/, function(msg) {
        var name = '@labianca';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Rosie stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Rosie is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "http://www.syfy.com/sites/syfy/files/styles/large/public/DarkMatter_blog_lady_robots_rosie.jpg?itok=WKa2TijX");
    });

    bot.respond(/The time has come to kill Bender!/, function(msg) {
        var name = '@erica';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Bender stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Bender is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "http://www.3dhifi.com/pics/bender_futurama.jpg");
    });

    bot.respond(/The time has come to kill Johnny5!/, function(msg) {
        var name = '@jgennell';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Johnny5 stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Johnny5 is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "http://static1.1.sqspcdn.com/static/f/411701/11841451/1303405897207/Johnnybeatdown.jpg?token=rJ%2FkItc3H5STsJBXmXBsEkseRXQ%3D");
    });

    bot.respond(/The time has come to kill R2D2!/, function(msg) {
        var name = '@myounkie';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... R2D2 stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of R2D2 is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "http://keithmac.com/wp-content/uploads/2010/07/r2d2lights.jpg");
    });

    bot.respond(/The time has come to kill Kitt!/, function(msg) {
        var name = '@scobban';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Kitt stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Kitt is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "https://c1.staticflickr.com/4/3569/3280708482_903a0caed2.jpg");
    });

    bot.respond(/The time has come to kill Hal!/, function(msg) {
        var name = '@tcooper';
        var room = '#general';
        bot.messageRoom(name, "A wild Walle appears!" + '\n' + "http://img07.deviantart.net/1cc2/i/2015/124/e/7/wall_e__quot_kill_eve_quot__by_mrkillzo-d1v9t26.jpg");
        bot.messageRoom(name, "Battle ensues!.... Hal stands no chance!" + '\n' + " and the victor.... " + '\n' + '\n' + '\n' + "WALLLEEEEEEEEE!" + '\n' + 'A trophy of Hal is now being displayed in the general chat.');
        bot.messageRoom(room, "It is done my lord. I have brought you a trophy for your collection." + '\n' + "https://tigerpapers.files.wordpress.com/2011/11/hal.jpg");
    });

}
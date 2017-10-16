var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



const TelegramBot = require('node-telegram-bot-api');

const token = '341606823:AAHOMPub5YoX86JKuGUYxA56abhYvdlQsyo';

const bot = new TelegramBot(token, {polling: true});

// Echo
bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;

	const resp = match[1];
	bot.sendMessage(chatId, resp);
});


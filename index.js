const TelegramBot = require('node-telegram-bot-api');

const token = '341606823:AAHOMPub5YoX86JKuGUYxA56abhYvdlQsyo';

const bot = new TelegramBot(token, {polling: true});

// Start
bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;

	const resp = "Welcome to YDLS Bot!";
	bot.sendMessage(chatId, resp);
});


// Echo
bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;

	const resp = match[1];
	bot.sendMessage(chatId, resp);
});

// Test
bot.onText(/\/test/, (msg) => {
	const chatId = msg.chat.id;

	const resp = "OK!";
	bot.sendMessage(chatId, resp);
});

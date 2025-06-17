const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Токен бота (пока фейковый)
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN || '123456:ABC-DEF1234', { polling: true });

// Когда кто-то пишет "/start"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я твой торговый бот 🤖');
});

console.log('Бот запущен... Попробуй написать ему "/start"');

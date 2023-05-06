const TelegramBot = require("node-telegram-bot-api");

//Environment configuration
const environment = process.env.NODE_ENV || "development";
if (environment === "production") {
  // Production environment configuration
  require("dotenv").config({ path: ".env.production" });
  console.log(`${environment} environment is running.`);
} else {
  // Development environment configuration
  require("dotenv").config({ path: ".env.local" });
  console.log(`${environment} environment is running.`);
}

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `${msg.text}`);
});

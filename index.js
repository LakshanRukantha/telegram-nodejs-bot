const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const express = require("express");

const app = express();

const token = process.env.TOKEN;
const port = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Welcome to Lakshan's telegram bot server." });
});

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `${msg.text}`);
});

app.listen(port, (res) => {
  console.log(`App is running on port ${port}`);
});

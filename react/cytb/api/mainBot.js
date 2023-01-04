const { Telegraf } = require("telegraf");

const {
  startBot,
  help,
  textMessage,
  login,
  register,
} = require("./telegramBot/telegramFunctions");

class mainBot {
  constructor(API_TOKEN) {
    this.bot = new Telegraf(API_TOKEN);
    this.commands = [
      { name: "login", event: login },
      { name: "register", event: register },
    ];
  }

  defaultCommands() {
    this.bot.start((ctx) => startBot(ctx));
    this.bot.help((ctx) => help(ctx));
    this.commands.forEach((command) => {
      this.bot.command(command.name, async (ctx) => await command.event(ctx));
      this.bot.action(command.name, async (ctx) => await command.event(ctx));
    });
  }

  start() {
    this.defaultCommands();

    this.bot.on("text", (ctx) => textMessage(ctx));
    return this.bot;
  }
}

module.exports = mainBot;

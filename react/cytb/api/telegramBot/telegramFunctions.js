const startBot = (ctx) => {
  const name =
    ctx.from.first_name !== undefined
      ? ctx.from.first_name
      : ctx.from.username !== undefined
      ? ctx.from.username
      : undefined;

  ctx.reply(
    `Hello, ${
      name !== undefined ? name : "user"
    }! Type /help for check commands.`
  );

  setTimeout(() => {
    login(ctx);
  }, 1000);
};

const help = (ctx) => {
  const replyText =
    "list of commands: \n" +
    "/login - for check your login status \n" +
    '/register "token" - for register your telegramId on your profile on site \n' +
    "";

  return ctx.telegram
    .sendMessage(ctx.chat.id, replyText, {
      reply_markup: {
        resize_keyboard: true,
        inline_keyboard: [[{ text: "login", callback_data: "login" }]],
      },
    })
    .then(() => "done");
};

const textMessage = (ctx) => {
  return ctx.reply(ctx.message.text.split("").reverse().join("") + " !");
};

const {
  profileInfoTelegram,
  registerTelegramId,
} = require("../database/sqllite");

const login = (ctx) => {
  profileInfoTelegram(ctx.from.id, (userData) => {
    return ctx.reply(
      userData !== undefined
        ? "You have successfully logged in"
        : 'User has undefined, go to site and type \n/register "your token"'
    );
  });
};

const loginBool = (ctx) => {
  profileInfoTelegram(ctx.from.id, (userData) => {
    return userData !== undefined
      ? { isLogin: true, userData: userData }
      : { isLogin: false };
  });
};

const register = (ctx) => {
  const token = ctx.message.text.split(" ").pop();

  registerTelegramId(ctx.from.id, token, (error, response, dbError) => {
    if (response?.token === undefined) {
      if (dbError !== undefined) {
        if (dbError === 100) {
          return ctx.reply("Token has undefined in our database");
        }

        if (dbError === 200) {
          return ctx.reply("TelegramId has already registered");
        }

        return ctx.reply(
          "ATTENTION ERROR ATTENTION: \n" +
            "1. TelegramId has already registered \n" +
            "2. Token has undefined \n" +
            "if you know your telegram has not register and token has right \n" +
            "type message in /help 'your message' \n"
        );
      }
    } else {
      return ctx.reply(
        `Your token: ${response.token} has successfully register on your telegramId: ${ctx.from.id}`
      );
    }
  });
};

module.exports = { startBot, help, textMessage, login, register, loginBool };

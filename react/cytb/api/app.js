const fastify = require("fastify")({ logger: true });

// cors for server work on localhost with react app
const cors = require("@fastify/cors");
fastify.register(cors, {});

const {
  indexRoute,
  getPublicKeyRoute,
  loginRoute,
  registerRoute,
  profileInfoRoute,
} = require("./routes");

// тут гет пост запросы по ссылкам и вывод инфы по функциям из ./routes
fastify.get("/", (req, res) => indexRoute(res));
fastify.get("/getPublicKey", (req, res) => getPublicKeyRoute(res));
fastify.post("/login", (req, res) => loginRoute(res, req.body));
fastify.post("/register", (req, res) => registerRoute(res, req.body));
fastify.post("/profileInfo", (req, res) => profileInfoRoute(res, req.body));

// стартуем мейн бота
const mainBot = require("./mainBot");
const bot = new mainBot(process.env.TELEGRAM_API_TOKEN).start();
bot.launch().then((r) => console.log("mainBot started"));

// старт севрера на 9000 порту
fastify.listen({ port: 9000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

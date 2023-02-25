const TelegramBot = require('node-telegram-bot-api');
const program = require('commander');
const process = require('process');

let id = 535124715;

const tocen = "6037639408:AAEKFRwlayS7-9TpQRR8nTepkW4LLS0Fvlw";

const bot = new TelegramBot(tocen, {polling: true});

program
.command('send-message <message>')
.action(async (msg) => {
    await bot.sendMessage(id, msg);

    process.exit();
})


program
.command('send-photo <photo>')
.action(async (photo) => {
    await bot.sendPhoto(id, photo)

    process.exit();
})

program.parse(process.argv)



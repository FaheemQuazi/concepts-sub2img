const cfg = require("./config");
const tmi = require('tmi.js');
const { createCanvas } = require('canvas');
const fs = require('fs');
const robot = require('robotjs');

// canvas config
const img = createCanvas(cfg.image.width, cfg.image.height);
const ctx = img.getContext('2d');

ctx.font = cfg.image.text.font;
ctx.fillStyle = cfg.image.text.color;
ctx.textAlign = cfg.image.text.align;
ctx.textBaseline = cfg.image.text.baseline;

const img_filename = ((cfg.image.fileName.match(/^[A-Za-z]:\\/) === null) ? (__dirname + "\\" + cfg.image.fileName) : cfg.image.fileName)
const txt_loc_x = cfg.image.width/2;
const txt_loc_y = cfg.image.height/2;
const txt_max_w = cfg.image.width - (cfg.image.width * 0.02);

function makeImg(txt) {
    ctx.clearRect(0, 0, cfg.image.width, cfg.image.height);
    if (cfg.image.bgColor !== "transparent") {
        ctx.fillStyle = cfg.image.bgColor;
        ctx.fillRect(0, 0, cfg.image.width, cfg.image.height);
        ctx.fillStyle = cfg.image.text.color;
    }
    ctx.fillText(txt, txt_loc_x, txt_loc_y, txt_max_w);

    let fout = fs.createWriteStream(img_filename);
    let stream = img.createPNGStream();
    stream.pipe(fout);
    fout.on('finish', () => {
        console.log("~", txt, "written");
        if (cfg.pressKey !== false) {
            if (cfg.pressKey.m !== undefined) {
                robot.keyTap(cfg.pressKey.k, cfg.pressKey.m);
            } else {
                robot.keyTap(cfg.pressKey.k);
            }
        }
    });
}


// tmi.js
const chat = new tmi.Client({
	channels: cfg.channels
});

chat.on('connected', () => {
    console.log("> Connected to", cfg.channels);
});
chat.on("disconnected", (reason) => {
    console.log("> Disconnected - " + reason);
});

chat.on('subscription', (channel, username, method, message, userstate) => {
    console.log(`* ${username} subbed - ${message === null ? "no msg" : message}`);
    makeImg(username);
});
chat.on("resub", (channel, username, months, message, userstate, methods) => {
    let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
    console.log(`* ${username} resubbed for ${cumulativeMonths} months`, '-', message === null ? "no msg" : message);
    makeImg(username);
});
chat.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    console.log(`* ${username} gifted sub to ${recipient}.`);
    makeImg(username);
});
chat.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    console.log(`* ${username} gifted ${numbOfSubs} subs to chat.`);
    makeImg(username);
});

chat.connect();
const Discord = require('discord.js');
const http = require('http');
const client = new Discord.Client();
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKL
MNOPQRSTUVWXYZ1234567890-_'

const URL = id=>`https://www.youtube.com/watch?v=${id
}`

const options = id=>{
    method: 'HEAD',
    host: 'img.youtube.com',
    path: `/vi/${id}/0.jpg`
};
function ID() {
let id = '';
const random = Math.floor(Math.random() * 1)  //
yt links can be 11 long or 10 long
    for (const i = 0; i <= 10 + random; i++) {
        const random1 = Math.floor(Math.random() * ch
ars.length);                                                 id += chars[random];
    }
    return id
}

function go() {
    let id = new ID();
    let url = new URL(id);

    http.request(options(id), function(res) {
        if (res.statusCode == 200) {
            console.log(url);
            // put send code here
        } else {
            go(); // 30 minutes is long enough to ret
ry      }
    }).end();
}

client.on('ready', _=>{
    console.log('Go time!');
    setInterval(go, 30*60*1000);  // 30 minutes
})

client.login('...')

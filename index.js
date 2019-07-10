const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('I am ready!');
})

    //setInterval(function(){
        console.log('set interval is working!');
        var id = [];
        console.log('id variable reset');
        function createId(){
            for (i = 0; i <= 10; i++){
                charType = Math.floor((Math.random() * 3) + 1);
                console.log('1-3 random generation result is:', charType);
                if (charType == 1){
                    //generate a random number between 0 and 9
                    var num = Math.floor((Math.random() * 9) + 0);
                    console.log('random number is:',num);
                    if (num == 0){
                        id[i] = 0;
                        console.log('id',i,'is:',num);
                    } else if (num == 1){
                        id[i] = 1;
                        console.log('id',i,'is:',num);
                    } else if (num == 2){
                        id[i] = 2;
                        console.log('id',i,'is:',num);
                    } else if (num == 3){
                        id[i] = 3;
                        console.log('id',i,'is:',num);
                    } else if (num == 4){
                        id[i] = 4;
                        console.log('id',i,'is:',num);
                    } else if (num == 5){
                        id[i] = 5;
                        console.log('id',i,'is:',num);
                    } else if (num == 6){
                        id[i] = 6;
                        console.log('id',i,'is:',num);
                    } else if (num == 7){
                        id[i] = 7;
                        console.log('id',i,'is:',num);
                    } else if (num == 8){
                        id[i] = 8;
                        console.log('id',i,'is:',num);
                    } else if (num == 9){
                        id[i] = 9;
                        console.log('id',i,'is:',num);
                    }
                } else if (charType == 2){
                    //generate a random capital letter
                    var cap = Math.floor((Math.random() * 26) + 1);
                    console.log('random number is',cap);
                    if (cap == 1){
                        id[i] = 'A';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 2){
                        id[i] = 'B';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 3){
                        id[i] = 'C';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 4){
                        id[i] = 'D';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 5){
                        id[i] = 'E';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 6){
                        id[i] = 'F';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 7){
                        id[i] = 'G';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 8){
                        id[i] = 'H';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 9){
                        id[i] = 'I';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 10){
                        id[i] = 'J';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 11){
                        id[i] = 'K';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 12){
                        id[i] = 'L';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 13){
                        id[i] = 'M';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 14){
                        id[i] = 'N';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 15){
                        id[i] = 'O';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 16){
                        id[i] = 'P';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 17){
                        id[i] = 'Q';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 18){
                        id[i] = 'R';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 19){
                        id[i] = 'S';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 20){
                        id[i] = 'T';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 21){
                        id[i] = 'U';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 22){
                        id[i] = 'V';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 23){
                        id[i] = 'W';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 24){
                        id[i] = 'X';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 25){
                        id[i] = 'Y';
                        console.log('id',i,'is:',id[i]);
                    } else if (cap == 26){
                        id[i] = 'Z';
                        console.log('id',i,'is:',id[i]);
                    }
                } else if (charType == 3){
                    //generate a random lowercase letter
                    var lower = Math.floor((Math.floor() * 26) + 1);
                    console.log('random number is',lower);
                    //after generating random character set it equal to id[i]
                    if (lower == 1){
                        id[i] = 'a';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 2){
                        id[i] = 'b';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 3){
                        id[i] = 'c';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 4){
                        id[i] = 'd';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 5){
                        id[i] = 'h';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 6){
                        id[i] = 'i';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 7){
                        id[i] = 'j';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 8){
                        id[i] = 'k';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 9){
                        id[i] = 'l';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 10){
                        id[i] = 'm';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 11){
                        id[i] = 'n';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 12){
                        id[i] = 'o';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 13){
                        id[i] = 'p';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 14){
                        id[i] = 'q';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 15){
                        id[i] = 'r';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 16){
                        id[i] = 's';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 17){
                        id[i] = 't';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 18){
                        id[i] = 'u';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 19){
                        id[i] = 'v';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 20){
                        id[i] = 'w';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 21){
                        id[i] = 'x';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 22){
                        id[i] = 'y';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 23){
                        id[i] = 'z';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 24){
                        id[i] = 'e';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 25){
                        id[i] = 'f';
                        console.log('id',i,'is:',id[i]);
                    } else if (lower == 26){
                        id[i] = 'g';
                        console.log('id',i,'is:',id[i]);
                    }
                }
            }
        }
        createId();

        var url = '';
        console.log('url variable is reset!');
        var finalId = id.toString();
        console.log('final id is:',finalId);
        function createUrl(){
            url = 'https://www.youtube.com/watch?v=' + finalId;
            console.log('URL created:',url);
        }
        createUrl();

        function checkUrl(){
            console.log('checking url...');
var http = require('http');

function isValidYoutubeID(finalId) {
  var options = {
    method: 'HEAD',
    host: 'img.youtube.com',
    path: '/vi/' + finalId + '/0.jpg'
  };

  var req = http.request(options, function(res) {
    if (res.statusCode == 200){
        console.log("Valid Youtube ID");
    } else {
        console.log("Invalid Youtube ID");
    }
  });

  req.end();
}
        }
        checkUrl();
      //}, 15000);  

client.login('redacted');

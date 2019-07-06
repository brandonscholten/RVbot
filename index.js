const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('I am ready!');
})

while (2 = 2) {
    setInterval(function(){
        var id = [];
        function createId(){
            for (i = 0; i <= 11; i++){
                charType = Math.floor((Math.random() * 3) + 1);

                if (charType === 1){
                    //generate a random number between 0 and 9
                    var num = Math.floor((Math.random() * 9) + 0);

                    if (num === 0){
                        id[i] = 0;
                    } else if (num === 1){
                        id[i] = 1;
                    } else if (num === 2){
                        id[i] = 2;
                    } else if (num === 3){
                        id[i] = 3;
                    } else if (num === 4){
                        id[i] = 4;
                    } else if (num === 5){
                        id[i] = 5;
                    } else if (num === 6){
                        id[i] = 6;
                    } else if (num === 7){
                        id[i] = 7;
                    } else if (num === 8){
                        id[i] = 8;
                    } else if (num === 9){
                        id[i] = 9;
                    }
                } else if (charType === 2){
                    //generate a random capital letter
                    var cap = Math.floor((Math.random() * 26) + 1);

                    if (cap === 1){
                        id[i] = 'A';
                    } else if (cap === 2){
                        id[i] = 'B';
                    } else if (cap === 3){
                        id[i] = 'C';
                    } else if (cap === 4){
                        id[i] = 'D';
                    } else if (cap === 5){
                        id[i] = 'E';
                    } else if (cap === 6){
                        id[i] = 'F';
                    } else if (cap === 7){
                        id[i] = 'G';
                    } else if (cap === 8){
                        id[i] = 'H';
                    } else if (cap === 9){
                        id[i] = 'I';
                    } else if (cap === 10){
                        id[i] = 'J';
                    } else if (cap === 11){
                        id[i] = 'K';
                    } else if (cap === 12){
                        id[i] = 'L';
                    } else if (cap === 13){
                        id[i] = 'M';
                    } else if (cap === 14){
                        id[i] = 'N';
                    } else if (cap === 15){
                        id[i] = 'O';
                    } else if (cap === 16){
                        id[i] = 'P';
                    } else if (cap === 17){
                        id[i] = 'Q';
                    } else if (cap === 18){
                        id[i] = 'R';
                    } else if (cap === 19){
                        id[i] = 'S';
                    } else if (cap === 20){
                        id[i] = 'T';
                    } else if (cap === 21){
                        id[i] = 'U';
                    } else if (cap === 22){
                        id[i] = 'V';
                    } else if (cap === 23){
                        id[i] = 'W';
                    } else if (cap === 24){
                        id[i] = 'X';
                    } else if (cap === 25){
                        id[i] = 'Y';
                    } else if (cap === 26){
                        id[i] = 'Z';
                    }
                } else if (charType === 3){
                    //generate a random lowercase letter
                    var lower = Math.floor((Math.floor() * 26) + 1);
                    //after generating random character set it equal to id[i]
                    if (lower === 1){
                        id[i] = 'a';
                    } else if (lower === 2){
                        id[i] = 'b';
                    } else if (lower === 3){
                        id[i] = 'c';
                    } else if (lower === 4){
                        id[i] = 'd';
                    } else if (lower === 5){
                        id[i] = 'h';
                    } else if (lower === 6){
                        id[i] = 'i';
                    } else if (lower === 7){
                        id[i] = 'j';
                    } else if (lower === 8){
                        id[i] = 'k';
                    } else if (lower === 9){
                        id[i] = 'l';
                    } else if (lower === 10){
                        id[i] = 'm';
                    } else if (lower === 11){
                        id[i] = 'n';
                    } else if (lower === 12){
                        id[i] = 'o';
                    } else if (lower === 13){
                        id[i] = 'p';
                    } else if (lower === 14){
                        id[i] = 'q';
                    } else if (lower === 15){
                        id[i] = 'r';
                    } else if (lower === 16){
                        id[i] = 's';
                    } else if (lower === 17){
                        id[i] = 't';
                    } else if (lower === 18){
                        id[i] = 'u';
                    } else if (lower === 19){
                        id[i] = 'v';
                    } else if (lower === 20){
                        id[i] = 'w';
                    } else if (lower === 21){
                        id[i] = 'x';
                    } else if (lower === 22){
                        id[i] = 'y';
                    } else if (lower === 23){
                        id[i] = 'z';
                    } else if (lower === 24){
                        id[i] = 'e';
                    } else if (lower === 25){
                        id[i] = 'f';
                    } else if (lower === 26){
                        id[i] = 'g';
                    }
                }
            }
        }
        createId();

        var url = '';

        var finalId = id.toString();

        function createUrl(){
            url = 'https://www.youtube.com/watch?v=' + finalId;
        }
        createUrl();

        function checkUrl(){
            function yt_exists($videoID) {
                $theURL = "http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=$videoID&format=json";
                $headers = get_headers($theURL);
            
                return (substr($headers[0], 9, 3) !== "404");
            }
            
            $id = finalId; //Video id goes here
            
            if (yt_exists($id)) {
                //  Yep, video is still up and running :)
                message.channel.send(url);
            } else {
                //  These aren't the droids you're looking for :(
                console.log('failed code :(');
                createId();
                createUrl();
            }
        }
        checkUrl();
      }, 2000);  
}

client.login('redacted');

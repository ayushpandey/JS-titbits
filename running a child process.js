/**
 * Created by blackjack on 7/4/16.
 */
var spawn =require('child_process').spawn,pwd=spawn('pwd');

pwd.stdout.on('data',function(data){
    console.log('Stdout: '+data);
});

pwd.stderr.on('data',function(data){
    console.log('Stderr: '+data);
});

pwd.on('exit',function(code){
    console.log("The child process exitted with the code: "+code);
});
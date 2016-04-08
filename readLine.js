/**
 * Created by blackjack on 7/4/16.
 */
var readline = require('readline');

var interface=readline.createInterface(process.stdin,process.stdout,null);

interface.question(">>What is the meaning of life? ", function(answer){
    console.log("About the meaning of life you said:"+answer);
    interface.setPrompt(">>");
    interface.prompt();
});

function closeInterface() {
    console.log("Leaving Interface");
    process.exit();
}
    interface.on('line',function(cmd){
        if(cmd.trim()=='.leave')
        {
            closeInterface();
            return;
        }
        else
        {
            console.log("Repeating Command: "+cmd);
        }

        interface.setPrompt(">>");
        interface.prompt();
    });
    interface.on('close',function(){
        closeInterface();
    })

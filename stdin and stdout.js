/**
 * Created by blackjack on 4/4/16.
 */
process.stdin.resume();
process.stdin.on('data',function(chunk){
    process.stdout.write('data:'+chunk);

});

/* We have to issue a resume command in order
 * for the application to be ready to read the data fro the stdin buffer */

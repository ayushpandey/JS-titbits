/**
 * Created by blackjack on 4/4/16.
 */
process.stdin.resume();
process.stdin.on('data',function(chunk){
    process.stdout.write('data:'+chunk);
    process.stdout.write(process.memoryUsage);
});


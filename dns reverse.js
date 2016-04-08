/**
 * Created by blackjack on 7/4/16.
 */
var dns=require('dns');

dns.reverse('173.255.206.103',function(err,dom){
    if(err){
        console.log("Dns reverse failed: "+ err);
    }
    else {
        dom.forEach(function (domain) {
            console.log(domain);
        });
    }
});
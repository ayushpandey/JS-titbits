/**
 * Created by blackjack on 7/4/16.
 */
/* The DNS module provides DNS resolution using c-ares, a C library that provides asyn-
 chronous DNS requests. It’s used by Node with some of its other modules, and can be
 useful for applications that need to discover domains or IP addresses.*/

var dns=require('dns');
dns.lookup('www.facebook',function(err,ip){
   if(err){
       console.log("DNS Lookup Failed with the following error: "+err);
   }
    else if(ip)
   {
       console.log(ip);
   }
});

const dns = require('dns');

let checkAdress = {
    "checkWithIP" : function(nameToSearch){
        let lookup = dns.lookup(nameToSearch, function(err, adresses, family){
            if (adresses === undefined ){
                console.log('No adress for this name !');
            } else {
                console.log(adresses);
            }
        });
    }
}

module.exports = {
    checkFunc : checkAdress
}
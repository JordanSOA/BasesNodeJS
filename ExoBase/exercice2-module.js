
console.log("je suis un module secondaire !");
console.log(__dirname);
console.log(`${process.cwd()}`);

let arrSentence = ["Premier phrase", "Deuxieme phrase", "Troisième phrase"];

let randObj = {
    "prop": "blue",
    "afficherProp" : function(){
        console.log(this.prop);
    }
};
module.exports = {
    a : arrSentence, 
    b :randObj
};
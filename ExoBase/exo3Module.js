const fs = require("fs");

let afficherTexteSiFichierExist = (fileP) => {
    fs.access(fileP, fs.constants.F_OK, (err) => {
        console.log(`${fileP} ${err ? 'does not exist' : 'exits'}`);

        fs.readFile('exo3Html.html', (err, data) => {
            if (err) throw err;
            console.log(data.toString('utf-8'));
        });
    });
};

module.exports = {
    funcRead : afficherTexteSiFichierExist
}
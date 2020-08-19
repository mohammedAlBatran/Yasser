const bcrypt = require('bcrypt');

async function gen() {

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash('12345', salt);
    let result = await bcrypt.compare('12345', hash);

    console.log(hash);
    console.log(salt);
    console.log(result);
}

gen();



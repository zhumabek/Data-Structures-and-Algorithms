const bcrypt = require('bcrypt');

const hash = async (val) => {
    const hashedValue = await bcrypt.hash(val, 12);
    console.log(hashedValue)
}

hash('name')

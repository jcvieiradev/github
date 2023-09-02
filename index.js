const configuracao = require("./config/config");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, 'config', '.env') });


console.log(configuracao)
console . log ( process.env.NODE_ENV_USUARIOs )

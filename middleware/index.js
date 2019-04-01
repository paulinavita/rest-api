const authenticated = require('../middleware/authenticated').authenticated
const authorized = require('../middleware/authorized').authorized
const authorizedUser = require('../middleware/authorizedUser').authorizedUser

module.exports= {authenticated, authorized, authorizedUser}
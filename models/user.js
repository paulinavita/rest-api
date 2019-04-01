'use strict';
var bcrypt = require('bcrypt');
const Op = require('sequelize').Op
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { 
      type : DataTypes.STRING,
      validate : {
        len : [3,12],
        isUnique: function(username) {
          return User.findOne({
            where: {
              username: username,
              id: {
                [Op.ne]: this.id
              }
            }
          })
          .then(data => {
            if(data !== null) {
              throw new Error(`Username has been used`)
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: {
      type : DataTypes.INTEGER,
      defaultValue : 0}
  }, { hooks : {
    beforeCreate : (newUser) => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(newUser.password, salt)
        newUser.password = hash
    }
  }
});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
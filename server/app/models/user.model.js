module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("accounts", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING, unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: 'last_login'
    });
    return User;
  };
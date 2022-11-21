const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
  });

  return UserTable;
}

module.exports = UserSchema;
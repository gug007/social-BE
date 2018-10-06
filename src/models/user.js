export default (sequelize, { INTEGER, STRING, DATE }) =>
  sequelize.define(
    "User",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      firstName: STRING,
      lastName: STRING,
      phone: STRING,
      email: STRING,
      created_at: DATE,
      updated_at: DATE
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "users"
    }
  );

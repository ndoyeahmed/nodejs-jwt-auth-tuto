const env = {
    database: 'rest_jwt_db',
    username: 'mouhamed',
    password: 'passer@123',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;

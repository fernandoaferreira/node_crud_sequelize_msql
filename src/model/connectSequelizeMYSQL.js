const SequelizeModulo = require('sequelize');

const user = 'root';
const password = 'senha123';
const dbname = 'dbteste'

const sequelize = new SequelizeModulo(`mysql://${user}:${password}@localhost:3306/${dbname}`, {
    operatorsAliases: SequelizeModulo.Op
});

sequelize
    .authenticate()
    .then(() => console.log(`MySQL conectado no banco ${dbname} ...`))
    .catch(() => console.log('ERRO! ao conectar no MySQL'));

sequelize.sync();

module.exports = sequelize;
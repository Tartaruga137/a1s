const sequelize = require('./connection');

async function syncDB() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida com o banco de dados.');
        await sequelize.sync();
        console.log('Modelos sincronizados com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar modelos com o banco de dados:', error);
    }
}

module.exports = syncDB;

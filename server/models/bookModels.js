const { Pool } = require('pg');

const PG_URI = 'postgres://xhsqbhvp:cE5qmanyOMJuqoLlj8pARqQq6yCIj7DQ@fanny.db.elephantsql.com/xhsqbhvp';

const pool = new Pool({
    connectionStrin: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};

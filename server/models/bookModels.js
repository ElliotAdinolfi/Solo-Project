const { Pool } = require('pg');

const PG_URI = 'postgres://tdglenbx:gXJbxXZat23os-CyF83z2ETMDU-rToDE@fanny.db.elephantsql.com/tdglenbx';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};

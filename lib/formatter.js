const formatter = require('sql-formatter');

module.exports = async str => {
    try {
        const result = formatter.format(str, { language: 'plsql' });
        console.log(result)
      return { data: result };
    } catch (e) {
        return { err: { message: 'Format error!' } };
    }
};
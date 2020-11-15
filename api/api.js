var sqlMap = require('./sqlMap');
var pool = require('./db')

module.exports = {
    //查询数据 req.query
    getUser(req, res) {
        var sql = sqlMap.getUser;
        pool.query(sql, (err, result) => {
            res.json(result);
        })
    }
}
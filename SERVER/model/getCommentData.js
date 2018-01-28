//自定义数据
const config = { table:"react"};

exports.execute = function (req, res, conn) {
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;

    const SQLS = require("../common/sqlCommands.js")(config);
    conn.query(SQLS.selectSQLN, function (err, rows) {
        if (err) {
            throw err;
        }else{
            res.send(rows);
            res.end();
        };
        conn.release();
    });
};

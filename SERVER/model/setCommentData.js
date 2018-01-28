//自定义数据
const config = { 
    table: "react",
    someInsert:""
};
exports.execute = function (req, res, conn) {
    // 获取前台页面传过来的参数  
    var param = req.body;
    config.someInsert = conn.escape(param);

    const SQLS = require("../common/sqlCommands.js")(config);
    conn.query(SQLS.insertSQLS, function (err, rows) {
        if (err) {
            throw err;
        } else {
            res.send({"msg":"ok"});
            res.end();
        };
        conn.release();
    });
};

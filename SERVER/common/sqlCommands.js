// 为了避免被SQL注入攻击, 需要把用户提交过来的数据进行转义之后再放到SQL查询语句里面
// 使用占位符'?'来代替connection.escape()，[]对传入的值进行转义
// 处理sql错误||处理数据完成，释放连接池资源--conn.release();

/* 
PS:

    //数据库的操作-- 插入[增加]操作
    addData: function (sql, options, conn, callback) {
        var sql = "INSERT into react_test set ?";
        conn.query(sql, [options], function (err, res) {
            if (err) {
                conn.release();
                logger.error("新增异常：" + err);
                return
            };
        });
    },
    // 数据库的操作-- 删除操作
    deleteData: function (sql, options, conn, callback) {
        var sql = 'DELETE FROM react_test where id=?';
        conn.query(sql, [options], function (err, res) {
            if (err) {
                conn.release();
                logger.error("删除异常：" + err);
                return
            };
        });
    },
    // 数据库的操作-- 更新[改]操作
    updateData: function (sql, options, conn, callback) {
        var sql = 'UPDATE react_test SET name = ?,url = ? WHERE Id = ?';
        conn.query(sql, [options], function (err, res) {
            if (err) {
                conn.release();
                logger.error("更新异常：" + err);
                return
            };
        });
    },
    // 数据库的操作--单条件查询操作
    getDataO: function (sql, options, conn, callback) {
        var sql = "SELECT * from react_test WHERE name=?";
        conn.query(sql, [options], function (err, res) {
            if (err) {
                conn.release();
                logger.error("查询异常：" + err);
                return;
            };
        });
    },
    // 数据库的操作--多条件查询操作
    getDataOO: function (sql, options, conn, callback) {

        // var sql = "SELECT * from react_test WHERE name=?&&password=?";

        conn.query(sql, [options], function (err, res) {
            if (err) {
                conn.release();
                logger.error("查询异常：" + err);
                return;
            };
        });
    } 
*/

const sqlCommends = function (config) {
        return {
            insertSQLM: `INSERT INTO ${config.table} (${config.someInsertKey}) VALUES (${config.someInsertValue})`,// 数据库的操作-- 多数据插入[增加]操作
            insertSQLS: `INSERT INTO ${config.table} SET ${config.someInsert}`,                            // 数据库的操作-- 单数据插入[增加]操作
            deleteSQL: `DELETE FROM ${config.table} WHERE ${config.someDelet}`,                           // 数据库的操作-- 删除操作
            updateSQL: `UPDATE ${config.table} SET ${config.someUpdateKey} WHERE ${config.someUpdateValue}`,     // 数据库的操作-- 更新[改]操作
            selectSQLN: `SELECT * FROM ${config.table}`,                                           // 数据库的操作--无条件查询操作
            selectSQLS: `SELECT * FROM ${config.table} WHERE ${config.someSelectS}`,                     // 数据库的操作--单条件查询操作
            selectSQLM: `SELECT * FROM ${config.table} WHERE ${config.someSelectM}`,                      // 数据库的操作--多条件查询操作
        };
}

module.exports = sqlCommends;








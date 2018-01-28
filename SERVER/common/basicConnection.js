const mysql = require('mysql');
// 连接池配置参数
const pool_config = {
    connectionLimit: 70,            // 连接池最大连接数
    host: "localhost",              // 域名
    user: "root",                   // 用户名
    password: "9527",               // 密码
    database: "react_test",         // 需要连接的库
    port: "3306"                    //数据库端口
};

const pool = mysql.createPool(pool_config);

module.exports = pool;


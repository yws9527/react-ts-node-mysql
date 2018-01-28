
// 数据接口路由
var pool = require('../common/basicConnection.js');// 数据资源池
var express = require('express');
var router = express.Router();
var c_path = '', Action = '';

router.all('/:module', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // 过滤掉跨域前的嗅探请求--OPTIONS
    if (req.method === "OPTIONS"){
        res.sendStatus(204);
        return false;
    };
    c_path = req.params.module;
    Action = require(`../model/${c_path}`);
    // 从连接池获取连接 
    pool.getConnection(function (err, connection) {
        Action.execute(req, res, connection);
    });
});

module.exports = router;

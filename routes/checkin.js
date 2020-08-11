const express = require('express');
var mysql = require('mysql');

checkInRouter = express.Router();
mailHost =  require('../controllers/mailHost');
smsHost = require("../controllers/smsHost");
checkInRouter.route('/')
.post((req,res,next)=>{
    let data =  req.body;
    let today = new Date();
    var date1 = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time1 = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    data.inTime = time1+' '+date1;
    let escape_string = '(' + mysql.escape(data.vName)  + ','
                            + mysql.escape(data.vEmail) + ','
                            + mysql.escape(data.vpnum)  + ','
                            + mysql.escape(data.hName)  + ','
                            + mysql.escape(data.hEmail) + ','
                            + mysql.escape(data.hpnum)  + ','
                            + mysql.escape(data.inTime)  + ','
                            + mysql.escape("NULL")  + ')';
    let query = 'INSERT INTO EntryTable (vname,vemail,vpnum,hname,hemail,hpnum,inTime,outTime) VALUES ' + escape_string;
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin','*');
    db.query(query, (err,result)=>{
        if(err) throw err;
        res.send(req.body);
    });
    mailHost(data);
    smsHost(data);
});

module.exports = checkInRouter;
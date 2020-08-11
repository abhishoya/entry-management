const express = require('express');

var checkOutRouter = express.Router();
var mailVisitor =  require('../controllers/mailVisitor');
checkOutRouter.route('/')
.post((req,res,next)=>{
    var data =  req.body;
    let today = new Date();
    var date1 = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time1 = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    data.outTime = time1+' '+date1;
    let query = 'SELECT * FROM EntryTable WHERE vemail="'+ data.email + '" AND outTime="NULL"';
    db.query(query, (err,result)=>{
        if(err) throw err;
        if(result.length===0)
        {
            res.statusCode=400;
            res.send("FAILURE");
        }
        else{
            let query = 'UPDATE EntryTable SET outTime="'+data.outTime+'" WHERE vemail="'+data.email+'" AND outTime="NULL"';
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.header('Access-Control-Allow-Origin','*');
            db.query(query, (err,result)=>{
                if(err) throw err;
                res.send("SUCCESS");
            });
            data.vName = result[0].vname;
            data.vEmail = result[0].vemail;
            data.hName = result[0].hname;
            data.inTime = result[0].inTime;
            data.vpnum =  result[0].vpnum;
            mailVisitor(data);
        }
    });
});

module.exports = checkOutRouter;
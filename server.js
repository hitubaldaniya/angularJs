const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'mypolice',
    multipleStatements:true
});

mysqlConnection.connect((err) => {
    if(!err)
        console.log('MySql DB connected successfully.')
    else
        console.log('MySql DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, ()=> console.log('Express server is running on port number: 3000') )

app.post('/addposts', (req, res) => {
    var sql = `INSERT INTO posts (category, title, content, oncreated) VALUES ('${req.body.postCategory}', '${req.body.postTitle}', '${req.body.postContent}', '${getDate(new Date)}')`;
    console.log(sql)
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err)
            res.send({status:true, msg:"Post inserted successfully."});
        else
            res.send({status:false, msg:"Something went wrong witn add post"});
    });
});

//get all posts
app.get('/posts', (req, res) => {
    mysqlConnection.query('SELECT * FROM posts', (err, rows, fields) => {
        if(!err){
            //console.log(rows);
            res.send(rows);
        }
        else
            res.send({status:false, msg:JSON.stringify(err)});
    });
});

//get all posts filtered by category
app.get('/posts/:category', (req, res) => {
    var sql = `SELECT * FROM posts WHERE category = '${req.params.category}'`;
    console.log(sql)
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err){
            console.log(rows)
            res.send(rows);
        }else
            res.send({status:false, msg:JSON.stringify(err)});
    });
});

function getDate(date) {
    let HH = (String(date.getHours()).length == 1) ? `0${date.getHours()}` : `${date.getHours()}`;
    let MM = (String(date.getMinutes()).length == 1) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    let SS = (String(date.getSeconds()).length == 1) ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + HH + ":" + MM + ":" + SS;
    return formatted_date;
}
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(8088, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

app.get('/students', (req, res)=>{
    client.query('Select * from students', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.get('/students/:id', (req, res)=>{
    client.query('Select * from students where id=${req.params.id}', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/students', (req, res)=> {
    let student = req.body;
    console.log(req.body);
    let insertQuery = `insert into students(name, email, password) 
                       values('${student.name}', '${student.email}', '${student.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


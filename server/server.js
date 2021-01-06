const express= require('express');
const db = require('./db');
//const env= require('dotenv');
const cors= require('cors');
const app= express();
app.use(cors());
app.use(express.json());

app.get('/campaign',(req,res)=>{
    db.query('select * from campaign', (err, result)=>{

        if(err)
        {
            console.log(err)
        }
        res.send(result);
    })
})
app.get('/campaign/:id',(req,res)=>{
    db.query('select * from campaign where campaign_id=?',[req.params.id], (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        res.send(result);
    })
})




app.listen(3001, ()=>console.log(`server is running on : 3001`));
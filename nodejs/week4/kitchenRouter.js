const express = require('express');
const kitchenRouter = express.Router();
const bodyParser = require('body-parser');
const pool = require('./databaseHandler.js');
//middleware
kitchenRouter.use(bodyParser.json());
kitchenRouter.use(bodyParser.urlencoded({ extended: false }));

kitchenRouter.get('/', (req,res)=>{
    pool.query("SELECT * FROM Order ORDER BY type", (err, result)=>{
        if (err) 
        throw err;
        res.json(result);
      });
})


kitchenRouter.get('/:id', (req,res)=>{
    const {id} = req.params;
pool.query('SELECT * FROM Order WHERE id = ?', id , (err, result, query) => {
    if (err) {
      console.error("Please enter valid id", err);
    } else {
     res.json(result)
    }
    
    })
})

kitchenRouter.patch('/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    const updateStatus = req.body.status;
    console.log(updateStatus);
    pool.query(`UPDATE Order SET status = ? WHERE id = ?`,[updateStatus, id],(err, result, query) => {
        if (err) {
          console.error("something is wrong with server", err);
        } else { 
        console.log(`your order id is `)
    res.send(`Status is changed to the ${newStatus} status`);
        }
})
})

module.exports = kitchenRouter;
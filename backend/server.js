//Server.js
const express = require("express");

const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({  
    host: "localhost",   
    user: "root",  
    password: "",    
    database: "taskmanager"
});
app.get("/", (req, res) => { 
    const sql = "SELECT * FROM task";  
    console.log('GET request received');
    db.query(sql, (err, data) => {     
          if(err) 
          return res.json("Error");  
       return res.json(data);
           });
});
app.post('/create', (req, res) => {   
     const sql = "INSERT INTO task (Tasks) VALUES (?)";  
       const values = [     
           req.body.tasks
           ]  
              db.query(sql, [values], (err, data) => {  
                  if(err) 
                  return res.json("Error");   
                return res.json(data);  
              });
});
/*app.put('/update/:id', (req, res) => { 
      const sql = "UPDATE task SET Tasks = ? where ID = ?";  
        const values = [ 
              req.body.tasks
             ] 
        const id = req.params.id;     
           db.query(sql, [...values, id], (err, data) => {  
                  if(err)
                   return res.json("Error");   
                return res.json(data);   
             });
});*/
  
app.get('/update/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM task WHERE ID = ?";
  
  db.query(sql, [id], (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (data.length === 0) {
          return res.status(404).json({ error: 'Task not found' });
      }

      return res.json(data[0]);
  });
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE task SET Tasks = ?, isComplete = ? WHERE ID = ?';
  const values = [req.body.tasks, req.body.isComplete, id];

  db.query(sql, values, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
      return res.json(data);
  });
});
  
app.delete('/task/:id', (req, res) => { 
        const sql = "DELETE FROM task WHERE ID = ?";  
        const id = req.params.id;    
        db.query(sql, [id], (err, data) => {     
                   if(err) return res.json("Error");     
                      return res.json(data);  
                      });
});
app.listen(8081, () => { 
       console.log("listening");
})
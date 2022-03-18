import express from 'express';
import maxmin from "./util.js";

const app = express();

app.get('/maxmin', (req, res) => {
    const action = (req.query.action);
    const numbers = JSON.parse("[" + req.query.numbers + "]");

    const output = maxmin(action, numbers);
  
    const result = {
      action, 
      numbers,
      output
    };

    res.json(result);
  
});

app.listen(8080, () => 
  console.log("Servidor Rodando"));

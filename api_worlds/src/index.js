import express from 'express';
import read from './util.js';

const app = express();

app.use(express.json());

app.post('/read', (req, res) =>{
    const { action, input} = req.body;

    const result = {
        action,
        input,
        output: read(action, input),
    };

    res.json(result);
});

app.listen(3000, () =>{
    console.log('Rodando na porta 3000.');
});
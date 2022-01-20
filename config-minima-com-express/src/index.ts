import express, { Request, Response, NextFunction } from 'express';

// ---------------------------------------------------------------
// Express Framework
// Fornece recursos mínimos para construção de servidores web
// ---------------------------------------------------------------
//
const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar' });
});

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});


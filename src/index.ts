import express, { Request, Response } from 'express';

const app = express();

app.get('/name/:name', (req: Request, res: Response) => {
  const name = req.params.name || 'anonymous';
  res.send(`Hello world from: ${name}`);
});

app.get('/age/:age', (req: Request, res: Response) => {
  const age = req.params.age || '0';
  res.send(`Your age is: ${age}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

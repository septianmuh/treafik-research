import express, { Request, Response } from 'express';

const app = express();
const port = 8030;

app.get('/', (req: Request, res: Response) => {
    res.send('Selamat datang di API Node.js dengan TypeScript!');
});

app.get('/hello/:name', (req: Request, res: Response) => {
    const name: string = req.params.name as string;
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});

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

app.post('/v1/auth/login', (req: Request, res: Response) => {
    const resp = {
        "responseCode": "00",
        "responseMessage": "Successfully",
        "responseData": {
            "pernr": "90144893",
            "nip": "",
            "sname": "Shavira Putri Virissya",
            "werks": "KP00",
            "btrtl": "KP01",
            "kostl": "PS19019",
            "orgeh": "70238340",
            "stell": "",
            "werksTx": "Kantor Pusat",
            "btrtlTx": "Kantor Pusat",
            "kostlTx": "DIVISI APPLICATION MANAGEMENT & OPERATIO",
            "orgehTx": "APPLICATION MANAGEMENT & OPERATION DIVIS",
            "stellTx": "Associate IT - Project Officer 1 Level 2",
            "plansTx": "Associate IT - Project Officer 1 Level 2",
            "jgpg": "",
            "orgehPgs": "",
            "plansPgs": "",
            "orgehPgsTx": "",
            "plansPgsTx": "",
            "sisaCt": "",
            "sisaCb": "",
            "agama": "Islam",
            "tipeUker": "KP",
            "addArea": "KP",
            "status": "",
            "branch": "229",
            "hilfm": "",
            "htext": "",
            "hilfmPgs": "",
            "htextPgs": "",
            "kawin": ""
        }
    };
    res.send(resp);
});

app.post('/v1/auth/logout', (req: Request, res: Response) => {
    const resp = {
        "responseCode": "00",
        "responseMessage": "Successfully"
    };
    res.send(resp);
});

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});

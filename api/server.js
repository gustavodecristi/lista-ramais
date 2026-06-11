import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import https from 'https';
import fs from 'fs';

const app = express();
const prisma = new PrismaClient();

// Carregar os certificados SSL
const options = {
  key: fs.readFileSync('certificado/sa.key'),
  cert: fs.readFileSync('certificado/sa.crt'),
};

app.use(cors());
app.use(express.json());

app.get('/Ramais', async (req, res) => {
    try {
        const dados = await prisma.devices.findMany({
            select: {
                id: true,
                description: true,
            },
            orderBy: {
                description: 'asc'
            }
        });
        res.json(dados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar dados' });
    }
});

https.createServer(options, app).listen(3050, () => {
  console.log('API segura (HTTPS) rodando na porta 3050');
});
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/dados', async (req, res) => {
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

app.listen(3000, () => {
    console.log('API rodando na porta 3000');
});
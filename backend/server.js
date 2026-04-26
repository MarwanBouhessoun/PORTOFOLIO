/*
** PORTOFOLIO, 2026
** server
** File description:
** server for portofolio
*/

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const frontend = path.join(__dirname, '../frontend');

app.use(express.static(frontend));

app.get('/', (req, res) =>
{
    res.sendFile(path.join(frontend, '/index.html'));
});

const mesProjets = [
    { id: 1, titre: "Projet 1", description: "le 1", image: "https://picsum.photos/id/10/400/250"},
    { id: 2, titre: "Projet 2", description: "le 2", image: "https://picsum.photos/id/10/400/250"},
    { id: 3, titre: "Projet 3", description: "le 3", image: "https://picsum.photos/id/10/400/250"}
]

app.get('/api/projets', (req, res) =>
{
    res.json(mesProjets)
})

app.listen(PORT, () => {
    console.log(`Le serveur est allumé et tourne sur http://localhost:${PORT}`);
})

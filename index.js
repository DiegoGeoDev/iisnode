const express = require('express');

const app = express();
app.use(express.json());

const iis_prefix = '/node/exemploTutorial';

app.get(`${iis_prefix}/`, (request, response) => response.json('teste'));

// EM TEMP DE DESENVOLVIMENTO
// const PORT = 3000;
// app.listen(PORT, () => {
// 	console.log('SERVIÇO:', 'RODANDO NA PORTA ' + PORT);
// });

// IISNODE
app.listen(process.env.PORT);

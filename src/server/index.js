const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: "Mixy-radi node-najnovije" }));

app.listen(process.env.PORT || 9090, () => console.log(`Listening on port ${process.env.PORT || 9090}!`));

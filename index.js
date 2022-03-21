const express = require('express');
const cors = require('cors');
// const { httpLogger } = require('./middlewares');
const { logger } = require('./utils');

const PORT = process.env.PORT || 4040;
const app = express();

app.use(cors());
// app.use(httpLogger);

app.post('/joined/client/:id', (req, res) => {
  logger.info(JSON.stringify({ 'Jitsi user joined': req.params.id }));
  res.send('Logged');
});

app.post('/joined/psychologist/:id', (req, res) => {
  logger.info(JSON.stringify({ 'Jitsi psychologist joined': req.params.id }));
  res.send('Logged');
});

app.listen(PORT, () => logger.info(`Server is listeing on port ${PORT}`));

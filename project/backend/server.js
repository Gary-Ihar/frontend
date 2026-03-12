const express = require('express');
const app = express();

const PORT = 8081;

app.use(express.text({ type: '*/*' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use((req, res, next) => {
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      req.body = JSON.parse(req.body);
    } catch (e) {}
  }
  next();
});

app.post('/api/test', (req, res) => {
  console.log('Получен POST запрос:', req.body);
  res.json({
    message: 'Запрос успешно обработан',
    data: req.body,
  });
});

app.listen(PORT);

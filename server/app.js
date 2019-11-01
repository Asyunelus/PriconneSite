const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./routes/index');
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMS: 30 * 1000,
    max: 20
});

app.use(bodyParser.json());
app.use('/api', apiLimiter, api);

const siteLimiter = rateLimit({
    windowMS: 40 * 1000,
    max: 10
});

app.get('*', siteLimiter, (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

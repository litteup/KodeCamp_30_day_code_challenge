const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to KodeCamp 30-Day Code Challenge!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));


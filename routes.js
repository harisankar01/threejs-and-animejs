const express = require('express');
const path = require('path');
const app = express();
app.get('/home', (req, res) => {
res.sendFile(path.join(__dirname+'/inde.html'));
})
app.listen(3000);



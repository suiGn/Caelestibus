const express = require('express');
const app = express();

app.use('/node_modules', express.static('node_modules'));
app.use(express.static('.'));

app.listen(3330, () => {
    console.log('Server started on http://localhost:3330');
});
const app = require('express');
const path = require('path');

app.use(express.static(`${__dirname}/dist`));

app.get('/', function(req,res) {
  res.senfFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(process.env.PORT || 3000)

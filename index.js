const express = require('express');

const app = express();

app.use(express.static('.'));
app.use(function(req, res){
	res.sendFile(process.cwd()+"/index.html")
});

app.listen(3000, () => console.log('server started'));
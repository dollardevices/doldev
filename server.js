const express = require('express');

const path = require('path');

app = express();

 app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.port || process.env.PORT || 3000;

const server = app.listen(port);

server.on('listening', () =>
  console.info(` front end server started on ${port}`)
);


const express = require('express');
const mongoose = require('mongoose');
const speakeasy = require('speakeasy');
const path = require('path');
const fileUpload = require('express-fileupload');

require('dotenv').config();
const app = express();
const PORT = process.env.port || 5000;
const DB_ACCESS = process.env.DB_ACCESS;

app.use(express.json({ limit: '20mb', extended: true }));
app.use(fileUpload({ createParentPath: true }));
app.use('/api/auth', require('./routes/auth_route'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/labs', require('./routes/f_route'));

// for windows
// app.use(express.static(path.join(__dirname, '\\..\\efl-client\\build')));
// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, '\\..\\efl-client\\build') });
// });

// for linux server
app.use(express.static(path.join(__dirname, './../../build')));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './../../build') });
});

async function start() {
  try {
    await mongoose.connect(`${DB_ACCESS}`, {});

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

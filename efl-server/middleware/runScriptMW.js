const child_process = require('child_process');

//module.exports = (req, res, next) => {
// const cd = child_process.spawn('cd', [`${__dirname}\\new`]);

// cd.on('error', (error) => console.log('Cannot change dir: \n', error));

//Получение списка файлов и директорий для Linux
const ls = child_process.spawn('ls', ['-la']);

ls.stdout.on('data', (data) => console.log('Files list: \n', data.toString()));
ls.stderr.on('error', (error) => console.log('Error: \n', error));
//};

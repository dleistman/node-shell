let fs = require('fs');

function date () {
  let currentDate = new Date(Date.now());
  process.stdout.write(currentDate.toString());
  prompt();
}

function ls () {
  fs.readdir('.', (err, files) => {
    if (err) throw err;
    files.forEach( (file) => {
      process.stdout.write(file.toString() + '\n');
    });
    prompt();
  });
}

function prompt () {
  process.stdout.write('\nprompt > ');
}

function pwd () {
  process.stdout.write(process.env.PWD);
  prompt();
}

module.exports = {
  date,
  ls,
  pwd,
  prompt
}

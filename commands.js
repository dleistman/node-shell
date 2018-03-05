let fs = require('fs');

function date (file) {
  let currentDate = new Date(Date.now());
  process.stdout.write(currentDate.toString());
  prompt();
}

function ls (file) {
  fs.readdir('.', (err, files) => {
    if (err) throw err;
    files.forEach( (file) => {
      process.stdout.write(file.toString() + '\n');
    });
    prompt();
  });
}

function cat (file) {
  var filePath = process.env.PWD + '/' + file;
  fs.readFile(filePath, 'utf8', callBackOutput);
  prompt();
}

function catOutput (err, data) {
  process.stdout.write(data);
}

function headOutput (err, data) {
  data = data.split("\n")
  data = data.slice(0, 5);
  data = data.join("\n");
  process.stdout.write(data);
}

function head (file) {
  var filePath = process.env.PWD + '/' + file;
  fs.readFile(filePath, 'utf8', headOutput);
  prompt();
}

function tailOutput (err, data) {
  data = data.split("\n")
  data = data.slice(-5);
  data = data.join("\n");
  process.stdout.write(data);
}

function tail (file) {
  var filePath = process.env.PWD + '/' + file;
  fs.readFile(filePath, 'utf8', tailOutput);
  prompt();
}

function echo (args) {
  args = args.map((element) => {
    if(element[0] === '$'){
      if(process.env.hasOwnProperty(element.slice(1))) {
        return process.env[element.slice(1)];
      } 
      } else {
        return element;
    }
  })
  process.stdout.write(args.join(" "));
  prompt();
}

function prompt (file) {
  process.stdout.write('\nprompt > ');
}

function pwd (file) {
  process.stdout.write(process.env.PWD);
  prompt();
}

module.exports = {
  date,
  ls,
  cat,
  head,
  tail,
  echo,
  pwd,
  prompt
}

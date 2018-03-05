let fs = require('fs');
let request = require('request');

function date (file, done) {
  let output = "";
  let currentDate = new Date(Date.now());
  output = currentDate.toString();
  done(output);
}

function ls (file, done) {
  let output = "";
  fs.readdir('.', (err, files) => {
    if (err) throw err;
    files.forEach( (file) => {
      output += file.toString() + '\n';
    });
    done(output);
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
  let filePath = process.env.PWD + '/' + file;
  fs.readFile(filePath, 'utf8', tailOutput);
  prompt();
}

function sort (file) {
  let filePath = process.env.PWD + '/' + file;
  fs.readFile(filePath, 'utf8', (err, data) => {
    data = data.split("\n")
    data = data.sort();
    data = data.join("\n");
    process.stdout.write(data);
  });
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
  done();
}

function prompt (file) {
  process.stdout.write('\nprompt > ');
}

function pwd (file) {
  process.stdout.write(process.env.PWD);
  prompt();
}

function curl (url) {
  request(url, (err, response, body) => {
    process.stdout.write(body);
  });
}

module.exports = {
  date,
  ls,
  cat,
  head,
  tail,
  echo,
  pwd,
  prompt,
  sort,
  curl
}

// import modules
// let fs = require('fs');
let commands = require('./commands');
let date = commands.date,
    ls = commands.ls,
    prompt = commands.prompt,
    pwd = commands.pwd;

// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim().toLowerCase();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'date') {
    date();
  } else if (cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
    prompt();
  }
});

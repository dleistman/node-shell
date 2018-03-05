// import modules
let commands = require('./commands');
let date = commands.date,
    ls = commands.ls,
    prompt = commands.prompt,
    pwd = commands.pwd,
    echo = commands.echo,
    cat = commands.cat,
    head = commands.head,
    tail = commands.tail;
    

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  let dataArr = data.toString().trim().split(" ");

  let cmd = dataArr[0].toLowerCase();
  let args = dataArr.slice(1);

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'date') {
    date();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'echo') {
    echo(args);
  } else if (cmd === 'cat') {
    cat(args[0]);
  } else if (cmd === 'head'){
    head(args[0]);
  } else if (cmd === 'tail'){
    tail(args[0]);
  } else {
    process.stdout.write('Command not found: ' + cmd);
    prompt();
  }
});

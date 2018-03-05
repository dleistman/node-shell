// import modules
let commands = require('./commands');
let date = commands.date,
    ls = commands.ls,
    prompt = commands.prompt,
    pwd = commands.pwd,
    echo = commands.echo,
    cat = commands.cat,
    head = commands.head,
    sort = commands.sort,
    curl = commands.curl,
    tail = commands.tail;

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  let dataArr = data.toString().trim().split(" ");

  let cmd = dataArr[0].toLowerCase();
  let args = dataArr.slice(1);

  if (cmd === 'pwd') {
    pwd(null, done);
  } else if (cmd === 'date') {
    date(null, done);
  } else if (cmd === 'ls') {
    ls(null, done);
  } else if (cmd === 'echo') {
    echo(args, done);
  } else if (cmd === 'cat') {
    cat(args[0], done);
  } else if (cmd === 'head'){
    head(args[0], done);
  } else if (cmd === 'tail'){
    tail(args[0], done);
  } else if (cmd === 'sort'){
    sort(args[0], done);
  } else if (cmd === 'curl'){
    curl(args[0], done);
  } else {
    process.stdout.write('Command not found: ' + cmd);
    prompt();
  }
});

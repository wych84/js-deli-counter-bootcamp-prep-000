function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + KatzDeliLine.length + " in line.";
}

function nowServing (line) {
  if line === []
  return "There is nobody waiting to be served!"
  else
  return line[0]
  }
  line.shift[0]
}
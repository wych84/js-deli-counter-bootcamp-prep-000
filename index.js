function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + KatzDeliLine.length + " in line.";
}

function nowServing (line) {
  var first = line[0]
  return first
  line.shift[0]
}
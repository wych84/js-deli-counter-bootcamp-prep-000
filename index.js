function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + KatzDeliLine.length + " in line.";
}

function nowServing (person) {
  if (person.length > 0)
  return "Currently serving " + person.shift() + ".";
  else
  return "There is nobody waiting to be served!";
}

function currentLine (KatzDeliLine) {
  if (KatzDeliLine.length > 0)
  else
  
}
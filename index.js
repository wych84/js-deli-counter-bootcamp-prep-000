function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + KatzDeliLine.length + " in line.";
}

function nowServing (person) {
  if (line.length > 0)
  return "Currently serving " + person.shift + ".";
  else
  return "There is nobody waiting to be served!";
  }
}
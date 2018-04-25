function takeANumber (KatzDeliLine, names) {
  KatzDeliLine = [];
  for (i=0; i<KatzDeliLine.length; i++)
  KatzDeliLine.push("Welcome, ${names[i]}. You are number ${i + 1} in line.");
  }
return KatzDeliLine;
}
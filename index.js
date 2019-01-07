function takeANumber(array, name) {
  let position = array.push(name); 
  return  `Welcome, ${name}. You are number ${position} in line.`;
}


function nowServing(line) {
  if (line.length === 0 ) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}.`;  
  }
}

function currentLine(line){
  if (line.length === 0 ) {
    return 'The line is currently empty.';
  } else {
    let linestring = 'The line is currently:';
    for (let x = 0; x < line.length; x++) {
      if (x === (line.length - 1)) {
        linestring = linestring + ` ${x + 1}. ${line[x]}`;
      } else {
        linestring = linestring + ` ${x + 1}. ${line[x]},`;
      }
    }
    return linestring;
  }
  





}
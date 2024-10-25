var finalPositionOfSnake = function (n, commands) {
  let position = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "DOWN") {
      position += n;
    } else if (commands[i] === "RIGHT") {
      position += 1;
    } else if (commands[i] === "UP") {
      position -= n;
    } else {
      position--;
    }
  }
  return position;
};
console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"]));
console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));

let score = 0;

let targetRow = 4;
let targetColumn = 3;

var row = 0;
var column = 0;
var keyPress = "";

let left = 37;
let up = 38;
let right = 39;
let down = 40;

function callMe() {
  document.addEventListener("keydown", function (e) {
    keyPress = e.which;
  });
}

function changeTheTarget() {
  document.getElementsByTagName("tr")[targetRow].children[
    targetColumn
  ].innerHTML = ``;
  const randomRow = Math.floor(Math.random() * 15) + 1;
  const randomCol = Math.floor(Math.random() * 27) + 1;

  targetRow = randomRow;
  targetColumn = randomCol;
  document.getElementsByTagName("tr")[randomRow].children[
    randomCol
  ].innerHTML = `<div id='target'></div>`;
  score++;
  document.getElementById("score").innerHTML = score;
}

function ifCallZThen() {
  keyPress = "";
  let j = row;
  function loop2() {
    if (row === targetRow && column === targetColumn) {
      changeTheTarget();
    }

    if (keyPress === up ) {
      ifCallWThen();
      return;
    } else if (keyPress === left ) {
      ifCallAThen();
      return;
    } else if (keyPress === right) {
      ifCallLThen();
      return;
    }

    setTimeout(function () {
      document.getElementsByTagName("tr")[j].children[column].innerHTML = ``;

      if (j < 15) {
        document.getElementsByTagName("tr")[j + 1].children[
          column
        ].innerHTML = `<div id='source'></div>`;
      }

      j++;
      row = j;
      if (j <= 15) {
        loop2();
      } else {
        document.querySelector("#btn").disabled = false;

        document.getElementById("over").innerHTML = "GAME OVER";
        // document.getElementsByTagName("tr")[row - 1].children[
        //   column
        // ].innerHTML = ``;
        return;
        //      document.querySelector('#score').innerHTML
      }
    }, 200);
  }
  loop2();
}
function ifCallWThen() {
  keyPress = "";
  let j = row;
  function loop2() {
    if (row === targetRow && column === targetColumn) {
      changeTheTarget();
    }
    if (keyPress === down) {
      ifCallZThen();
      return;
    } else if (keyPress === left ) {
      ifCallAThen();
      return;
    } else if (keyPress === right) {
      ifCallLThen();
      return;
    }
    setTimeout(function () {
      document.getElementsByTagName("tr")[j].children[column].innerHTML = ``;

      if (j > 0) {
        document.getElementsByTagName("tr")[j - 1].children[
          column
        ].innerHTML = `<div id='source'></div>`;
      }

      j--;
      row = j;
      if (j >= 0) {
        loop2();
      } else {
        document.querySelector("#btn").disabled = false;
        document.getElementById("over").innerHTML = "GAME OVER";
        // document.getElementsByTagName("tr")[row - 1].children[
        //   column
        // ].innerHTML = ``;
        return;
        //      document.querySelector('#score').innerHTML
      }
    }, 200);
  }
  loop2();
}
function ifCallAThen() {
  keyPress = "";
  let j = column;
  function loop2() {
    if (row === targetRow && column === targetColumn) {
      changeTheTarget();
    }
    if (keyPress === up || keyPress === up) {
      ifCallWThen();
      return;
    } else if (keyPress === down) {
      ifCallZThen();
      return;
    } else if (keyPress === right) {
      ifCallLThen();
      return;
    }
    setTimeout(function () {
      document.getElementsByTagName("tr")[row].children[j].innerHTML = ``;
      if (j > 0) {
        document.getElementsByTagName("tr")[row].children[
          j - 1
        ].innerHTML = `<div id='source'></div>`;
      }

      j--;
      column = j;
      if (j >= 0) {
        loop2();
      } else {
        document.querySelector("#btn").disabled = false;
        document.getElementById("over").innerHTML = "GAME OVER";
        // document.getElementsByTagName("tr")[row].children[
        //   column+1
        // ].innerHTML = ``;

        return;
        //      document.querySelector('#score').innerHTML
      }
    }, 200);
  }
  loop2();
}
function ifCallLThen() {
  keyPress = "";
  let j = column;
  function loop2() {
    setTimeout(function () {
      if (row === targetRow && column === targetColumn) {
        changeTheTarget();
      }
      if (keyPress === up || keyPress === up) {
        ifCallWThen();
        return;
      } else if (keyPress === left ) {
        ifCallAThen();
        return;
      } else if (keyPress === down) {
        ifCallZThen();
        return;
      }
      document.getElementsByTagName("tr")[row].children[j].innerHTML = ``;
      if (j < 27) {
        document.getElementsByTagName("tr")[row].children[
          j + 1
        ].innerHTML = `<div id='source'></div>`;
      }

      j++;
      column = j;
      if (j <= 27) {
        loop2();
      } else {
        document.querySelector("#btn").disabled = false;
        document.getElementById("over").innerHTML = "GAME OVER";
        // document.getElementsByTagName("tr")[row].children[
        //   column - 1
        // ].innerHTML = ``;

        return;
        //      document.querySelector('#score').innerHTML
      }
    }, 200);
  }
  loop2();
}

callMe();

function start() {
  document.getElementById("score").innerHTML = `0`;
  row = 0;
  document.getElementsByTagName("tr")[targetRow].children[
    targetColumn
  ].innerHTML = `<div id='target'></div>`;
  score = 0;
  column = 0;
  document.getElementById("over").innerHTML = "";

  // GREEN ON ORIGIN
  document.getElementsByTagName(
    "tr"
  )[0].children[0].innerHTML = `<div id='source'></div>`;

  //START BUTTON SHOULD BE DISABLE
  document.querySelector("#btn").disabled = true;

  let rowOne = document.getElementsByTagName("tr")[0].children;
  var i = 1;

  function myLoop() {
    column = i - 1;
    if (keyPress === down) {
      ifCallZThen();
    } else if (keyPress === up) {
      ifCallWThen();
    } else if (keyPress === left) {
      ifCallAThen();
    } else if (keyPress === right) {
      ifCallLThen();
    } else {
      setTimeout(function () {
        rowOne[i - 1].innerHTML = ``;
        rowOne[i].innerHTML = `<div id='source'></div>`;
        i++;
        column = i;
        if (i < 28) {
          myLoop();
        } else {
          document.querySelector("#btn").disabled = false;
          document.getElementById("over").innerHTML = "GAME OVER";
          document.getElementsByTagName("tr")[row].children[
            column - 1
          ].innerHTML = ``;
        }
      }, 200);
    }
  }

  myLoop();
}

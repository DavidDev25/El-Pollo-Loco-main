let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  console.log("My Character is", world.character);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 70) {
    keyboard.F = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 70) {
    keyboard.F = false;
  }
});

function bindBtnsPressEvent() {
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    event.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById("btnUp").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById("btnUp").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById("btnJump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById("btnJump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}

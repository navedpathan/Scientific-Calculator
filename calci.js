let screen = document.querySelector("#screen")
let btn = document.querySelectorAll("#btn");
let screenValue = '';

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == 'x') {
      btnText = '*';
      screen.value += btnText;
    }
    else if (btnText == '÷') {
      btnText = '/';
      screen.value += btnText;
    }
    else if (btnText == 'CE') {
      screenValue = '';
      screen.value = screenValue;
    }
    else if (btnText == 'AC') {
      backspace = screen.value;
      screenValue = backspace.slice(0, -1);
      screen.value = screenValue;
    }
    else if (btnText == '%') {
      x = eval(screen.value);
      result = x / 100;
      screen.value = result;
    }
    else {
      screen.value += btnText;
    }
  })
}

document.getElementById("equal").addEventListener("click", () => {
  screen.value = eval(screen.value);
})

document.getElementById("sin").addEventListener("click", () => {
  screen.value = Math.sin(screen.value);
})

document.getElementById("cos").addEventListener("click", () => {
  screen.value = Math.cos(screen.value);
})

document.getElementById("tan").addEventListener("click", () => {
  screen.value = Math.tan(screen.value);
})

document.getElementById("pow").addEventListener("click", () => {
  screen.value = Math.pow(screen.value, 2);
})

document.getElementById("sqrt").addEventListener("click", () => {
  screen.value = Math.sqrt(screen.value);
})

document.getElementById("log").addEventListener("click", () => {
  screen.value = Math.log(screen.value);
})

document.getElementById("pi").addEventListener("click", () => {
  screen.value = 3.14159265359 * (screen.value);
})

document.getElementById("e").addEventListener("click", () => {
  screen.value = 2.71828182846 * (screen.value);
})

document.getElementById("fact").addEventListener("click", () => {
  var i, num, f;
  f = 1
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  screen.value = f;
})





const textArea = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const solution = document.querySelector('.solution');
const reset = document.querySelector('.reset');
const del = document.querySelector('.delete');
const switchButtons = document.querySelectorAll(
  '.color-switch-button > button'
);
const switchButton1 = document.querySelector('.color-switch-button-1');
const switchButton2 = document.querySelector('.color-switch-button-2');
const switchButton3 = document.querySelector('.color-switch-button-3');
console.log(switchButton1);
const button = document.querySelectorAll('.calculator button');

const calculate = function () {
  numbers.forEach(n => {
    n.addEventListener('click', function () {
      textArea.textContent += n.value;
    });
  });
  document.querySelectorAll('.operator').forEach(op => {
    op.addEventListener('click', function (e) {
      textArea.textContent += op.value;
    });
  });
};
calculate();
solution.addEventListener('click', function (e) {
  e.preventDefault();
  eval(textArea.textContent);
  textArea.textContent = eval(textArea.textContent);
});
reset.addEventListener('click', function () {
  textArea.textContent = '';
});
del.addEventListener('click', function () {
  let str = textArea.textContent;
  str = str.substring(0, str.length - 1);
  textArea.textContent = str;
});

const darkTheme = theme => {
  if (window.localStorage != undefined) {
    if (
      window.localStorage.getItem('dcor_theme_pref') === theme ||
      (window.localStorage.getItem('dcor_theme_pref') === null &&
        window.matchMedia(`(prefers-color-scheme:${theme}`).matches)
    ) {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove(theme);
    }
  }
};
darkTheme('dark');

const theme1n2 = function (theme, removeTheme) {
  document.documentElement.classList.add(theme);
  document.documentElement.classList.remove(removeTheme);
};

switchButton3.addEventListener('click', function () {
  theme1n2('dark', 'blue-theme');
});
switchButton2.addEventListener('click', function () {
  theme1n2('blue-theme', 'dark');
});
const theme3 = function () {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.remove('blue-theme');
};

switchButton1.addEventListener('click', function () {
  theme3();
});

const toggleVisibleBtn = function () {
  switchButtons.forEach(sb => {
    sb.classList.remove('visible');
    sb.classList.add('hidden');
  });
};
const addVisibleBtn = function (el) {
  el.classList.remove('hidden');
  el.classList.add('visible');
};
switchButtons.forEach(sb => {
  sb.addEventListener('click', function (e) {
    const clicked = e.target;
    addVisibleBtn(clicked);
    toggleVisibleBtn();
    clicked.classList.add('visible');
  });
});

switchButtons.forEach(sb => {
  sb.classList.add('hidden');
});

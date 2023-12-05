//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

//TODO:==============================================

// const btnEl = document.querySelector('#alertButton');
// const inputEl = document.querySelector('#alertInput');
// btnEl.addEventListener('click', () =>{
//     alert(inputEl.value)
// })
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

//TODO:==============================================

// const btnEl = document.querySelector('#swapButton');
// const inputLeftEl = document.querySelector('#leftSwapInput');
// const inputRigthEl = document.querySelector('#rightSwapInput');

// btnEl.addEventListener('click', () => {
//  const rigthValue = inputRigthEl.value,
//  leftValue = inputLeftEl.value;

//  inputRigthEl.value = leftValue;
//  inputLeftEl.value = rigthValue;

// })

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

//TODO:==============================================

// const inputEl = document.querySelector("#passwordInput"),
//   btnEl = document.querySelector("#passwordButton");

//   btnEl.addEventListener('click', () => {
     
//     if(inputEl.type === 'text'){
//         inputEl.type = 'password';
//         btnEl.textContent = 'Розкрити';
//     } else if(inputEl.type === 'password'){
//         inputEl.type = 'text';
//         btnEl.textContent = 'Приховати';
//     }

//   })
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================

// const btnDecreaseEl = document.querySelector('#decrease');
// const btnIncreaseEl = document.querySelector('#increase');
// const boxEl = document.querySelector('#box');

// const increaseElement = () => {

//     const boxStyle = getComputedStyle(boxEl).width;
//     boxEl.style.width = parseInt(boxStyle) + 10 + 'px';
//     boxEl.style.height = parseInt(boxStyle) + 10 + 'px';
// }

// const decreaseElement = () => {
//     const boxStyle = getComputedStyle(boxEl).width;
//     boxEl.style.width = parseInt(boxStyle) - 10 + 'px';
//     boxEl.style.height = parseInt(boxStyle) - 10 + 'px';
// }


// btnDecreaseEl.addEventListener('click', decreaseElement);
// btnIncreaseEl.addEventListener('click', increaseElement);

/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const elements = document.querySelectorAll('.listItem');
// const btnEl = document.querySelector('#double')
// const increaseElements = () => {
//     elements.forEach(elem => {
//         elem.textContent = BigInt(elem.textContent) ** 2n;
//     })
// }

// btnEl.addEventListener('click', increaseElements);
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/




/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

// const someFn = `function foo() {
//     const arr = [1, 2, 3];
//     console.log(arr);
//   }`;
  
  console.log(checkBrackets(someFn));
  
  function checkBrackets(str) {
    const stack = [];
    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let i = 0; i < str.length; i++) {
      const bracket = str[i];
      if (bracket === "(" || bracket === "{" || bracket === "[") {
        stack.push(bracket);
      }
      if (bracket === "}" || bracket === ")" || bracket === "]") {
        const lastEl = stack.pop();
        if (bracket !== obj[lastEl]) {
          return false;
        }
      }
    }
    if (stack.length) return false;
    return true;
  }
  
  console.log(checkBrackets(someFn));
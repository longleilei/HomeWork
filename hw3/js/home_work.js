// FUNCTIONS 


function multiply(...[a, b, c]) {

	return a * b * c;
}

console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4));

console.log(`задание: Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
	результат: ${multiply(1,2,3)}, ${multiply(1,2,3,4)} ; 
	объяснение: rest-parameter allows including as many values as you want, but still doesn't work here`)


// need to make the variable global 

function reverseString(word) {
	let newW = "";
	for (let w = word.length - 1; w >= 0; w--) {
		newW = newW + word[w];
	}
	return newW;
}

let newW = reverseString("test");
reverseString("wonderful"); //why does it concarnate??? 

console.log(reverseString("test"));
console.log(reverseString("wonderful"));
console.log(`задание: Создать функцию, которая принимает строку и возвращает строку-перевертыш: 
	reverseString(‘test’) // “tset”.

	результат: ${reverseString("test")} ${reverseString("wonderful")} ; 
	объяснение: use the same method as reverse a string and add arguments`)


// also problematic, because returns charCode values separated from each other 
/*
let Strr = "ananas"
let nwStrr = ""; 
for (let i = 0; i < Strr.length; i++){

  nwStrr = Strr.charCodeAt(i) + ""

		console.log(nwStrr); 

	}
	output:  
'97'
'110'
'97'
'110'
'97'
'115'
 */


let nwStrr = "";

function getCodeStringFromText(Strr) { //грязная ф-ция!!!!

	let nwStrr = "";

	for (let i = 0; i < Strr.length; i++) {

		nwStrr = `${Strr.charCodeAt(i)} `;

		console.log(nwStrr);

	}
}
getCodeStringFromText("hello");

console.log(`задание: 3. Создать функцию, которая в качестве аргумента принимает строку 
	из букв и возвращает строку, где каждый символ разделен пробелом 
	и заменен на юникод-значение символа: 

getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

подсказка: для получения кода используйте специальный метод 
	результат: ${nwStrr} ; 
	объяснение: `)

/* let num = window.prompt("Enter your number in a range 1 to 10 : ")

if (num > 0 && num <= 10) {
	console.log("Let's see if you guessed...")
} else {
	console.log("Think again...")
} */

function guessTheNum() {
	let num = window.prompt("Enter your number in a range 1 to 10 : ");
	if (num > 0 && num <= 10) {
		let rnd = Math.floor(Math.random() * 10);
		if (num === rnd) {
			console.log("You guessed!");
		} else {
			console.log("Try again!")
		}

	} else {
		console.log("Think again...")
	}
}
guessTheNum();
console.log(`задание: 4. Создать функцию угадай число. 
	Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
	Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали 
	то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
	Числа в строке указаны как пример вы подставляете реальные числа.
	результат: ; 
	объяснение: `)



console.log(`задание: 
	результат: ; 
	объяснение: `)
console.log(`задание: 
	результат: ; 
	объяснение: `)
console.log(`задание: 
	результат: ; 
	объяснение: `)
console.log(`задание: 
	результат: ; 
	объяснение: `)
console.log(`задание: 
	результат: ; 
	объяснение: `)


	function processString(string, handler) {
		let newString = '';
	
		for (let i = 0; i < string.length; i++) {
			newString += handler(string[i]);
		}
	
		return newString;
	}

	/* let blabla = function (symb) {
		return symb.toUpperCase();
	} */
	processString('Hello, easycode!', function (symb) {
		return symb.toUpperCase();
	});

	processString('Hello, easycode!', function () {
		return arguments[0] + "_";
	}
	);

	processString('Hello, easycode!',
		function (symbol) {
			return symbol.charCodeAt();
		});
		
		
// FUNCTIONS 


function multiply() {
	
	let i; 
	let mlt = 1; 
	for (i = 0; i < arguments.length;i++){
		mlt += mlt * i;  
	}
	return mlt; 

}

console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4));

console.log(`задание: Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
	результат: ${multiply(1,2,3)}, ${multiply(1,2,3,4)} ; 
	объяснение: rest-parameter allows including as many values as you want, but still doesn't work here`)


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
function getCodeStringFromText(Strr){

let nwStrr = ""; 

for (let i = 0; i < Strr.length; i++){

  nwStrr = `${Strr.charCodeAt(i)}`;

		console.log(nwStrr); 

	}
}
let text = getCodeStringFromText("hello");
console.log(`задание: 3. Создать функцию, которая в качестве аргумента принимает строку 
	из букв и возвращает строку, где каждый символ разделен пробелом 
	и заменен на юникод-значение символа: 

getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

подсказка: для получения кода используйте специальный метод 
	результат: ${text} ; 
	объяснение: `)

	/* let num = window.prompt("Enter your number in a range 1 to 10 : ")

if (num > 0 && num <= 10) {
	console.log("Let's see if you guessed...")
} else {
	console.log("Think again...")
} */
/*
function guessTheNum() {
	let num = window.prompt("Enter your number in a range 1 to 10 : ");
	if (num > 0 && num <= 10) {
		let rnd = Math.floor(Math.random() * 10);
		if (num === rnd) {
			console.log("You guessed!");
		} else {
			window.alert(`Try again! Your number was ${num}, and random number was ${rnd}`)
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
	объяснение: `)*/

function getArray(n){
	let arrayNum = []; 
	for (let i = 0; i <= n; i++){
		arrayNum.push(i); 
	}
	return arrayNum;  
}
let rSlt = getArray(10); 


	console.log(`задание: 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
	результат: ${rSlt} ; 
	объяснение: `) 


function doubleArray(initArr){
	let innitArr = []; 
	return initArr + "," + initArr; 
}
let anS = doubleArray([1,2,3]); 

	console.log(`задание: 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
	doubleArray([1,2,3]) // [1,2,3,1,2,3]
	результат:${anS} ; 
	объяснение: `) 

	
function changeCollection(){ 

	let newColl = []; //set an empty array 
	//access 
	for (let i = 0; i < arguments.length; i++){
		for (let j = 0; j < arguments[i].length; j++){
			newColl.push(arguments[i].pop());
			}
		}
	return newColl;
	}
	let myAns = changeCollection([1,2,3], ['a', 'b', 'c'])

	console.log(`задание: 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
	changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
	
	результат:${myAns} ; 
	объяснение: `) 
	
/*
function funcGetUsers(users,field,value){ 
	 //set an empty array 
	//loop through array and check if there's a field = 
	//'gender'
	for (let user of users){
		if (field in user && value in user.field){
			return user; 
		}
		else{
			console.log(`Found no parameters`); 
		}
	}
}
	funcGetUsers(user,function(){
		let nUsers =[];
		return nUsers.push(user); 
	}); 

users = [ {name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'} ]

let fin = funcGetUsers(users,'gender','male'); 
//returns [Denis,Ivan]


	console.log(`задание: 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
	funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]


	результат: ${fin} ; 
	объяснение: `) 
*/ 

	//HIGHER-ORDER FUNCTIONS 

	let a = ['my', 'name', 'is', 'Trinity'] // New value: MyNameIsTrinity”
	let b = [10, 20, 30] //“New value: 100, 200, 300,”
	let c = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}]//“New value: Jhon is 45, Aaron is 20,”
	let d = ['abc', '123']//“New value: New value: cba, 321,” ”

	function firstFunction(arr,secondFunction){
		let newSuperArray = [];
		for (let i = 0; i < arr.length;i++){
			newSuperArray+=secondFunction(arr[i]); 
		}
		return console.log(newSuperArray); 
	}
	
	firstFunction(a, function(newSuperArray){
		let arr = [];
		arr += newSuperArray[0].toUpperCase() + newSuperArray.slice(1);
		return arr; 
	}) 

	firstFunction(b,function(newSuperArray){
		return newSuperArray * 10 + ','; 
	})

	firstFunction(c, function(newSuperArray){
		c.forEach((element) => {
			console.log(`${element.name} is ${element.age}`)})
		})

	firstFunction(d,function(newSuperArray){
		let len = newSuperArray.length;
		let arr = [];
		while (len--){
			arr+=newSuperArray[len]; 
		}
		return arr + ','; 
		})
	console.log(`задание: 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
	результат: ; 
	объяснение: `) 
/*
function every(ArrNums, func){
	// check if ArrNums is array
	// callback - return true/false
	//check if arrnums el > 5 
	if (ArrNums.isArray([34,2,77,140,4,687,7,67]) === true){ 
		let newArrNums = [];
		for (let i = 0; i <= ArrNums.length; i++){
			newArrNums.push(
				func(ArrNums[i])
			); 
			return newArrNums; 
		}
	}
	else{
		console.log(`Not an array!`) 
		}
}
	let filtArr = every(currI, index, function(ArrNums){
		return currI > 5 ? filtArr.push(currI) 
			: console.log('smth i don/t know what'); 
	}); 

console.log(filtArr); 



	console.log(`задание: 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback 
	функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.
	результат: ; 
	объяснение: `) 
*/ 

//FUNCTION METHODS

	let numNum = [1,2,3,5,8,9,10];

	//array of objects {digit: 1, odd: true}

		function oddOrEven(num){
			let obj = {}
			obj.digit = num; 
				if ((num % 2) === 1){
					obj.odd = true; 4
				}
				else{
					obj.odd = false; 
				}
				return obj;
			
		}
		let numArrObj = numNum.map(function (num){return oddOrEven(num)});
	console.log(oddOrEven(numNum)); 

	console.log(`задание: 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
	каждый элемент которого будет хранить информацию о числе и его четности:
	[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
	результат: ; 
	объяснение: `) 

let findZero = [12, 4, 50, 1, 0, 18, 40]; 

let zeroZero = function(number){
	return number === 0;
}
console.log(!(findZero.some(zeroZero))); 

	console.log(`задание:2.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
	результат: ; 
	объяснение: `)

	let someWords = ['yes', 'hello', 'no', 'easycode','what']; 
	//хотя бы одно слово длиной больше 3х букв
	//return true 

	let maybe = function(wrds){
		return wrds.length > 3; 
	}
	console.log(someWords.some(maybe)); 

	console.log(`задание: 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true 
	результат: ; 
	объяснение: `) 

	console.log(`задание: 
	результат: ; 
	объяснение: `) 


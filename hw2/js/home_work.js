
//OBJECTS  

let smartPhone = {
	product: 'iphone'
}; 
console.log(`задание: 1.Создать объект с полем product, равным ‘iphone’
	результат: This is our product value: ${smartPhone.product}; 
	объяснение: key-value`)

smartPhone.price = 1000
smartPhone.currency = 'dollar'
console.log(`задание: 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
	результат: ${JSON.stringify(smartPhone)} ; 
	объяснение: `)

//****
// problem - can't add 'model' and 'color', google doesn't help; 
/* let smartPhone = {
	product: 'iphone'
};   */

smartPhone.details = 'smth';
smartPhone.details = {
	modelA:'jjk', colorB:"jkjk"
};

console.log(`задание: 3. Добавить поле details, которое будет содержать объект с полями model и color
	результат: ${smartPhone}; 
	объяснение: `)






// SWITCH CASE & TERNARY OPERATOR 

let a = 'inline'; 
switch(a){
	case "block": 
		console.log('block'); break; 
	case "none" :  
		console.log('none'); break; 
	case "inline": 
		console.log('inline'); break; 
	default: 
		console.log("other");
}

console.log(`задание: Записать в виде switch case следующее условие:
if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
	console.log(‘other’)
}
	результат: ${a}; 
	объяснение: `)

/*if (nice === "hidden"){
	nice = "visible"}
else{
	nice = "hidden"
}

nice = "visible"; */ 

/*let nb = 10; 

if (nb === 0){
	console.log(nb = 1);
	}
else if(nb < 0){
	console.log ("nb is less than zero");
	}
else{
	console.log(nb *=10)
	} */ 

//1 

let nice = "hidden"; 

console.log(nice === "hidden" ? nice = "visible" 
	: nice = "hidden"); 


// 2
let nb = -1; 

console.log(nb === 0 ? nb = 1 
	: nb < 0 ? "nb is less than zero"
	: "else");

// 3
let product = {
    name: 'Apple',
    price: '10$'
};

let minPr = 10; 
let maxPr = 20; 

priceApp = Number(product.price.slice(0,2)) //!!!!!!
	console.log((priceApp >= minPr && priceApp < maxPr) ? product.name : "Tovara net!"); 


console.log(`задание: Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
	результат: ${nice}, ${nb}, ${priceApp}; 
	объяснение: `)






//LOOPS 

let str = "i am in the easycode"; 
//let newStr = str.split(" "); 
let newStr = str[0].toUpperCase();

for(let i = 1; i < str.length; i++){
	if(str[i-1] === " "){
		newStr+=str[i].toUpperCase();
	} else {
		newStr+=str[i];
	}
 }




console.log(`задание: 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while. 
	результат: ${newStr}; 
	объяснение: `)


let sent = "tseb eht ma i"; 
// split + reverse 
//let sent = "tseb eht ma i"; 
/* let sentSpl = sent.split(""); 
let rev = sentSpl.reverse(); 
let fin = rev.join("");  */
    
//Decrementing loop 
let sent1 = "tseb eht ma i"; 
let reversed = ""; 

for (let i = sent1.length - 1; i >= 0; i--){
	reversed += sent1[i]; 
}
//returns "NaN"

console.log(`задание: Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
	результат:  ${reversed}; 
	объяснение: `)


// 5! = 5*4*3*2*1 (j * j-1 * j-2)

let fact = 5;
let factorial = 1; 

for (let j = 0; j < fact; j++){
	factorial = factorial * (fact - j);  // 1 = 1 * 10; 10 = 10 * 9; 90 = 90 * 8... 
}
console.log(`задание: 3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
	результат: ${factorial}; 
	объяснение: `)


let ph = "JavaScript is a pretty good language"; 
let newPh = ph[0].toUpperCase();


for (let i = 1; i < ph.length; i++){
	if(ph[i-1] === " "){
		newPh += ph[i].toUpperCase();
	} else if(ph[i] !== ' '){
		newPh += ph[i];
	}
 /*  
  newPh[i][0].toUpperCase() + newPh[i].substring(1);  */
  
}
//How to join it together? .join() doesn't work :( also can't store it in a variable 



console.log(`задание: На основе строки “На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
	результат: ${newPh}; 
	объяснение: isolate first element and add substring of the rest part of the word`)


let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
let odd = []; 
let even = []; 

for (let value of Arr){
  if ((value%2) === 1){
    odd.push(value);
  }
}


// Always with the even??? 
//Why doesn't Arr[i] % 2 == 1 work??? 



console.log(`задание: 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
	результат: ${odd} ; 
	объяснение: to find evens use Arr[i]%2 != 1`)

   
let list = {
     name: "denis",
     work: "easycode",
     age: 29
}

for(let k in list){

  if (typeof list[k] === "string"){
    console.log(list[k]); 
  } else{
    console.log("not a string");
} 
}
//detected some weird error 

console.log(`задание: 6. Дан объект, Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

	результат:${list} ; 
	объяснение: instanceof String to check`)





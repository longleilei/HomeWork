//Strings 

let str = 'tired';
let firstL = str[0];
let lastL =str[str.length-1];
console.log(`задание: 1.Получить первую и последнюю буквы строки; 
	результат: ${firstL} and ${lastL}; 
	объяснение: access the string using braket notation`)

let str1 = 'i am so small';
let strUp = str1.toUpperCase();

console.log(`задание:2.Сделать первую и последнюю буквы в верхнем регистре; 
результат: ${strUp}; 
объяснение: use toUpperCase() method`)

let str2 = 'Where is the string?';
let strIn = str2.indexOf('string');
console.log(`задание: 3. Найти положение слова ‘string’ в строке
 ;результат: ${strIn} ;  
объяснение: use the indexOf method;`)

str2 = 'Where is the string?';
let secondSpace = str2.lastIndexOf(' '); 
console.log(`задание: 4. Найти положение второго пробела;
	результат: ${secondSpace};  
объяснение: use the lastIndexOf() method;`)

let str3 = 'congratulations';
let rslt = str3.substr(5,[4]);
console.log(`задание: 5.Получить строку с 5-го символа длиной 4 буквы;
результат: ${rslt} ;  
объяснение: use substr(symbol,number of symbols);`)

str3 = 'congratulations';
rslt1 = str3.substr(5,[10-5]); //substring или slice
console.log(`задание:6.Получить строку с 5-го по 9-й символы;
результат:${rslt1};  
объяснение: take 10 because index is always symbol+1;`)

str4 = 'One twin to the other: "You are ugly"'
let strSl = str4.slice(0, str4.length-6); //str4.length-6

console.log(`задание: 7.Получить новую строку из исходной путем удаления последних 6-и символов;
результат: ${strSl};  
объяснение: changed 6 to 24; used slice to get the new string;`)

let a = 20;
let b = 16;
let year = a.toString() + b.toString(); //year = "" + a + b; year = `${a}${b}`; 

console.log(`задание:8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”;
результат: ${year}, ${typeof year};  
объяснение:  used toString and typeof to check;`)

// Numbers 

p = (Math.PI).toFixed(2)
console.log(`задание: 1. Получить число pi из Math и округлить его до 2-х знаков после точки;
	результат: ${p};  
объяснение: used Math.PI and toFixed to round the number;`)

let nums = [15, 11, 16, 12, 51, 12, 13, 51];
let min = Math.min.apply(Math, nums);
let max = Math.max.apply(Math, nums);

console.log(`задание: 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51;
результат: ${min}, ${max};  
объяснение: Math.min.apply and Math.max.apply for arrays;`)


randA = (Math.random()).toFixed(2); 
randB = (Math.floor(Math.random()*100))
console.log(`задание: 3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.; 
результат: ${randA}, ${randB};  
объяснение: Math.random function;`)

let sum = (0.6 + 0.7).toFixed(1)

console.log(`задание: 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?;
результат: ${sum};  
объяснение: used toFixed() again;`)

let buck ='100843650$';
let buck1 = buck.slice(0,3) // parseInt parseFloat

 
console.log(`задание: 5. Получить число из строки ‘100$’;
результат: ${parseInt(buck)} ;  
объяснение: need to use slice first to get rid of the $ and then convert to Number;`)



//Type Convertion 
/*let c = 0 || 'string';
let d = 1 && 'string';
let e = null || 25;
let f = null && 25;
let g = null || 0 || 35;
let h = null && 0 && 35; */ 

console.log(`задание:Чему равно а, почему?;
результат: 1. ${"string"}, 
2.${"string"},
3.${25}, 
4.${null},
5.${35},
6.${null}  
объяснение: 1.A & B => if A == false, then A, else => B, 
2.A || B => if A = true, then A, else => B;`) 

/*12 + 14 + '12'
3 + 2 - '1'
'3' + 2 - 1
true + 2
+'10' + 1
undefined + 2
null + 5
true + undefined*/ 

console.log(`задание: Что отобразится в консоли. Почему?;
результат:
1.${'2612'}
2.${'5-1'} //!!!! 4
3.${4} // !!!! "31"
4.${3}
5.${'do not know'} /// !!! 11
6.${'Nan'};
7.${5}
8.${'Nan'}  
объяснение: Type Conversion:);`)

//If, else 

let nice ; 
nice = "hidden";
if (nice === "hidden"){ // проверка ===
	nice = "visible"}
else{
	nice = "hidden"
}

nice = "visible"; 

console.log(`задание: Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.;
результат: ${nice},
объяснение: `);

let nb = 0; 

if (nb === 0){ // проверка должна быть ===
	console.log(nb ==1);
	nb = 1
	}
else if(nb < 0){
	console.log ("nb is less than zero"); // nb = 'less then zero'
	}
else{
	console.log(nb *=10)
	}

console.log(`задание: 2.Используя 'if', записать условие:
если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись);
результат: ${nb};  
объяснение: `);


let car = { 
	name: 'Lexus', 
	age: 10, 
	create: 2008, 
	needRepair: false 
}

if (car.age >= 5){
	console.log("Need repair!")
	car.needRepair = true;} 
else{
	car.needRepair = false;
}


console.log(`задание: 3.Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.;
результат: ${car.needRepair}, 
объяснение: `);


let item = { 
	name: 'Intel core i7', 
	price: '100$', 
	discount: '15%' 
}
 
if ('discount' in item && item.discount){
	priceNum = parseFloat(item.price)  // !!! parseFloat
	discountNum = parseFloat(item.discount) // !!! parseFloat

	// don't know how to convert 15 to 0.15
	item.priceWithDiscount = priceNum - (priceNum * discountNum/100); // discountNum/100
	console.log(item.priceWithDiscount);
}

else{
	console.log(item.price); 
}
console.log(`задание:4.Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.;
результат: 
объяснение: `);

let product = {
    name: 'Apple',
    price: '10$'
};

let minPr = 10; 
let maxPr = 20; 

priceApp = Number(product.price.slice(0,2)) // !!! parseFloat
	priceApp >= minPr && priceApp < maxPr ? console.log(product.name) : console.log("Tovara net!") // нужно было через if но можно и так

console.log(`задание:5.Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.;
результат: 
объяснение: `);

console.log(`задание:;
результат: 
объяснение: `);

obj = {"bounding_boxes":[],
"count":3,
"entity_id":"hkstp_minibus",
"name":"minibus",
"timestamp":1575025798000,
"timestamp_boxes":1575023397000.0,
"zone_name":"hkstp"} 

let count = 0; 
let time = new Date(); 

for (let key in obj){
	if(key === "count"){
		//console.log(key + ' => ' + obj[key]) 
		console.log(count += obj[key])
		}
		if (key === "timestamp"){
			console.log(obj[key])
		}
  }


let timeRetr = new Date(msg.payload.timestamp); 

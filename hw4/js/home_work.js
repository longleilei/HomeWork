// SORT

newArrayOfArrays = [[14, 45],  [1],  ['a', 'c', 'd']].sort()

console.log(newArrayOfArrays)


console.log(`задание: Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
результат:${newArrayOfArrays} ; 
объяснение: `) 

arrayOfObj = [
	{cpu: 'intel', info: {cores:2, сache: 3}},
	{cpu: 'intel', info: {cores:4, сache: 4}},
	{cpu: 'amd', info: {cores:1, сache: 1}},
	{cpu: 'intel', info: {cores:3, сache: 2}},
	{cpu: 'amd', info: {cores:4, сache: 2}}
]

//arrayOfObj[0].info.cores

arrayOfObj.sort(function(prev,next){
	if (prev.info.cores < next.info.cores){return -1;}
	if (prev.info.cores > next.info.cores){return 1;}
	else{return 0}; 
	
})

console.log(arrayOfObj); 


console.log(`задание: Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).

результат:${JSON.stringify(arrayOfObj)}; 
объяснение: `) 

let products = [
	{title: 'prod1', price: 5.2}, 
	{title: 'prod2', price: 0.18},
	{title: 'prod3', price: 15}, 
	{title: 'prod4', price: 25},
	{title: 'prod5', price: 18.9}, 
	{title: 'prod6', price: 8},
	{title: 'prod7', price: 19},
	{title: 'prod8', price: 63}
];


function filterCollection(products,price1, price2){

	/* products.sort(function(prev,next){
	if (prev.price < next.price){return -1;}
	if (prev.price > next.price){return 1;}
	else{return 0}; 
	}) */

	let sortedPrice = products.map(function(product){
		if (product.price > price1 && product.price < price2){
			return product;
		}
	})

	sortedPrice.sort(function(prev,next){
		if (prev.price < next.price){return -1;}
		if (prev.price > next.price){return 1;}
		else{return 0}; 
		});
	
		console.log(sortedPrice)
}

filterCollection(products, 15, 30)

//→ [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]



console.log(`задание: 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
результат:; 
объяснение: `) 

let letArr = 
[{char:"a",index:12}, 
{char:"w",index:8},
{char:"Y",index:10},
{char:"p",index:3}, 
{char:"p",index:2},
{char:"N",index:6},
{char:" ",index:5}, 
{char:"y",index:4}, 
{char:"r",index:13}, 
{char:"H",index:0},
{char:"e",index:11}, 
{char:"a",index:1}, 
{char:" ",index:9}, 
{char:"!",index:14}, 
{char:"e",index:7}]

function returnSrting (letArr){
	//sort 
	letArr.sort(function(prev,next){
		if (prev.index < next.index){return -1;}
		if (prev.index > next.index){return 1;}
		else{return 0}; 
	});

	//create an array from chars 

	newArr = []
	for (let el of letArr){
		newArr.push(el.char)
	}

	//reduce to a string
	newSrting = newArr.reduce(function(string,current){return string + current})
	console.log(newSrting)
}
returnSrting (letArr);

console.log(`задание: 4.  Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки

результат: ${newSrting}; 
объяснение: `) 

/*
users = [
	{name: 'Denis', age: '29', gender: 'male'} , 
	{name: 'Ivan', age: '20', gender: 'male'}, 
	{name: 'Anna', age: '27', gender:'female'}
]

function funcGetUsers(arr, field, value){
  for (let i = 0; i <= users.length; i++){
    let newArray = []
    if (arr[i].hasOwnProperty(field) && arr[i][field] === value){
       newArray.push(arr[i])
       console.log(newArray)
    }
  }
}
  funcGetUsers(users, 'gender', 'male')*/ 

console.log(`задание: 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
результат:  ; 
объяснение: `) 


console.log(`задание: 
результат:; 
объяснение: `) 
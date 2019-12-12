
let arr = ['a', 'b', 'c', 'd']

function getArguments([arg1, ...rest]){
  return {
    first: arg1, 
    other: [...rest]
  }
}
let newK = getArguments(arr); 
console.log(newK); 

console.log(`задание: Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
результат:; 
объяснение: `) 


const organisation = {  
  name: 'Google',   
  info: 	{ employees: ['Vlad', 'Olga'], 
  partners: ['Microsoft', 'Facebook', 'Xing']  
 } 
};

/*function getInfo({name = 'Unknown', comp1, comp2} = {}){
  let {name:newName} = organisation; 
  let {info:{partners: [comp1,comp2]}} = organisation; 
  return `name - ${newName} and companies are - ${comp1, comp2}}`
}
getInfo(organisation); */ 

function getInfo({name: newName = '', info:{ partners: [comp1, comp2] }}){
  console.log(newName + ' and ' + comp1 + ', ' + comp2)
}
getInfo(organisation); 


//const {name: newName = '', info:{ partners: [comp1, comp2] }} = organisation; 
//console.log(newName, comp1, comp2) 


/*getInfo(organisation); → 
Name: Google 
Partners: Microsoft Facebook*/ 


console.log(`задание: 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
результат:; 
объяснение: `) 

const printParams = (...props) => 
  console.log (props.reduce((prev, next) => prev + next,0));
  printParams(1, 2, 3, 4); // 10
  printParams(); // 0

console.log(`задание: Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0

результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 
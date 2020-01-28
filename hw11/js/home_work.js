function Car(carBrand, carAge){
  this.carBrand = carBrand; 
  this.carAge = carAge; 
  this.getBrand = function(){
    const capitalize = this.carBrand.charAt(0).toUpperCase() + this.carBrand.slice(1)
    console.log(`The brand\'s name is ${capitalize}`)
  }
  this.calculateReleaseYear = function(){
    let currDate = new Date(); 
    let release = currDate.getFullYear() - this.carAge; 
    console.log(`The year of release is ${release}`)
  }
}

const lexus = new Car('lexus', 2);
lexus.getBrand(); // “Lexus”
lexus.calculateReleaseYear(); // 2017 (2019-2);



console.log(`задание: 
Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
var lexus = new Car(‘lexus’, 2);
lexus.получитьМарку(); // “Lexus”
lexus.получитьГодВыпуска(); // 2017 (2019-2);
Марка машины всегда должна возвращаться с большой буквы!

результат:; 
объяснение: `) 

function WriteCode(str){
  this.str = str; 
  this.showInitial = function(){
    console.log(`This is the initial string: ${this.str}`)
  }
  this.cipher = function(){
    let newStr = ' ';
    for(let i = str.length-1;i>=0; i--){
      newStr += str[i]
    } 
    console.log(`This is the cipher: ${newStr}`)
  }
  this.cipher2 = function(){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
    let strLower = str.toLowerCase(); 
    let newStr2 = ' '; 
    for (let j = 0; j < strLower.length-1; j++){
      for (let l = 0; l < alphabet.length-1; l++ ){
        if (strLower[j] === alphabet[l]){
          newStr2 += alphabet.indexOf(strLower[j])+1; 
        }
      }
    }
    console.log(`The number cipher: ${newStr2}`)}
  }


code1 = new WriteCode('I can see sunshine'); 
code1.showInitial()
code1.cipher()
code1.cipher2()

console.log(`задание: Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
a. показать оригинальную строку
b. показать зашифрованную строку
Строки не должны быть доступны через this, только с помощью методов.

результат:; 
объяснение: `) 

class Component{
  constructor(tagName){
    //tagName = Object.create(tagName); 
    //tagName = 'div'; 
    this.tagName = tagName || 'div'; 
    this.node = document.createElement(tagName)}
}

const comp = new Component('span');
console.log(comp); 

console.log(`задание: Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Пример вызова:

const comp = new Component('span');
результат:; 
объяснение: `) 

class Component2{
  constructor(tagName){
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
  }
  setText(text){
    this.node.textContent = text;
    return text; 
  }
}

const textEx = new Component2('div'); 
console.log(textEx.setText('What a nice day to stay at home and program!')); 

console.log(`задание: Реализовать конструктор и методы в ES6 синтаксисе:

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Component.prototype.setText = function (text) { 
  this.node.textContent = text;
};
результат:; 
объяснение: `) 


class Calculator{
  constructor(initVal){
    this.answer = initVal || 1; 
  }
  get curNum(){return `Current number is ${this.initVal}`}
  set curNum(answer){this.answer = initVal;}

  sum(initVal){
    this.answer += initVal;
    return this; 
  }
  fraction(initVal){
    this.answer -= initVal;
    return this; 
  }

  product(initVal){
    this.answer *= initVal; 
    return this; 
  }

  partition(initVal){
    this.answer /= initVal; 
    return this; 
  }
}

/*class Calculator{
  constructor(initVal){
    this.initVal = initVal || 1; 
  }
  get curNum(){return `Current number is ${this.initVal}`}
  set curNum(newVal){this.initVal = newVal;}


  sum(){
    this.initVal += this.initVal;
    return this; 
  }
  fraction(){
    this.initVal -= this.initVal;
    return this; 
  }

  product(){
    this.initVal *= this.initVal; 
    return this; 
  }

  partition(){
    this.initVal /= this.initVal; 
    return this; 
  }
}*/ 

const expl = new Calculator(45); 
const expl1 = new Calculator(33); 
console.log(expl.curNum)
console.log(expl.sum()) 
console.log(expl.fraction())
console.log(expl.product())
console.log(expl.partition())
console.log(expl1.curNum)
console.log(expl1.sum()) 
console.log(expl1.fraction()) 
console.log(expl.product())
console.log(expl.partition())

console.log(`задание: 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 
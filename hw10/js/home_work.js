const rectangle = {
  width: 200, 
  height:50, 
  getSquare: function(){
    let square = this.width * this.height; 
    return square; 
  }}

console.log(rectangle.getSquare()); 

console.log(`задание: Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};

результат:${rectangle.getSquare()}; 
объяснение: `) 

const price = {
  price: 10,
  discount: '15%',
  getPrice: function(){ return this.price}, 
  getPriceWithDiscount: function(){ 
    let discountInt = parseFloat(this.discount)/100
    return this.price - (this.price * discountInt)}
  };
console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5

console.log(`задание: Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
результат: ${price.getPrice()}, 
${price.getPriceWithDiscount()}; 
объяснение: `) 

const obj = {
  height: 10, 
  increaseHeight: function(){
    let newHeight = this.height + 1
    return newHeight; 
  }
}
console.log(obj.increaseHeight()); 

//object.height; // 11;

console.log(`задание:3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту: 
результат: ${obj.increaseHeight()}; 
объяснение: `) 

const numerator = {
  value: 1,
  double: function () {this.value *= 2
     return this},
  plusOne: function () {this.value++
    return this},
  minusOne: function () {this.value--
  return this}
}
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value); 

console.log(`задание: 4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов
результат:; 
объяснение: `) 


const products = {
  productAmount: 12, 
  productPrice: 243, 
  totalPrice: function(){
    return this.productAmount * this.productPrice 
  }
}
console.log(products.totalPrice()); 
 
const details = {
  detailsAmount: 37, 
  singlePrice: 12
}

console.log(products.totalPrice.call(details, details.detailsAmount, details.singlePrice)); // зачем передавать detailsAmount и singlePrice? они берутся из this


console.log(`задание: Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов).Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.


результат:; 
объяснение: `) 



let sizes = {
  width: 5, 
  height: 10},
getSquare = function () {return this.width * this.height}

console.log(getSquare.call(sizes))

console.log(`задание: Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes
результат:; 
объяснение: `) 

let element = {
    height: 25,
    getHeight: function() {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined


console.log(`задание: Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
результат:${getElementHeight()}; 
объяснение: `) 


function minus(num1){
  return function(num2){
    if (num1 === undefined){ // тут лучше делать проверку на number т.к. возможжны null и другие типы данных
      num1 = 0; 
    }
    if (num2 === undefined){ // тут лучше делать проверку на number т.к. возможжны null и другие типы данных
      num2 = 0; 
    }
    let minusNums = num1-num2; 
    return minusNums;
  }}


console.log(minus(10)(6)); 
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // -6
console.log(minus()()); // 0


console.log(`задание: Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

результат:; 
объяснение: `) 



function multiplyMaker(arg1){
  return function(arg2){
    return arg1 *= arg2; 
  }
    }

let multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)
console.log(`задание: Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
результат:; 
объяснение: `) 

const newModule = (function(init){

  let value = init; 

  return{
    setString: function(value){
     if (value === undefined){ // лучше задать значение по умолчанию чем прверку на undefined
        value = ' ';
        return value;  
       }
      if (typeof(value) === 'number'){
        value = value.toString()
        return value; 
      }
      else{
        return value;  
      }
    }, 
    getString: function(value){
      return value; 
    }, 
    getStrLength: function(value){
      return value.length; 
    }, 
    getStrReversed: function(value){
      let newStr = ''; 
      for(let i = value.length - 1; i>= 0; i--){
        newStr += value[i]; 
      }
      return newStr; 
    }
  }
})(); 

console.log(newModule.setString('abcde'))
console.log(newModule.getString());
//console.log(newModule.getStrLength()); 
//console.log(newModule.getStrReversed());  


console.log(`задание: Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5

результат:; 
объяснение: `) 


const calculator = (function (){

  let answer; 

  function setValue(value=0){
      answer = value;
      return this;}

  function addValue(value){
    answer += value;
    return this;}

  function multiplyValue(value){
    answer *= value;
    return this;}

  function powerValue(value){ 
    Math.pow(answer,value)
    return this; 
  }

  function learnValue(){ 
    answer =+ answer.toFixed(2);
    return answer;}

  return{
    setValue, 
    addValue, 
    multiplyValue, 
    powerValue,
    learnValue
  }
})(); 

console.log(calculator.setValue(10).addValue(5).multiplyValue(2).learnValue()); 
console.log(calculator.setValue(10).powerValue(2).learnValue()); 




console.log(`задание: Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 
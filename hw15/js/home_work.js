function Planet(name) {
	this.name = name;}

this.prototype.getName = function() {
	return 'Planet name is ' + this.name;
	}


function PlanetWithSatellite(name,satelliteName){
	Planet.call(this,satelliteName);
		this.satelliteName = satelliteName; }
	
PlanetWithSatellite.prototype = Object.create(Planet.prototype); 

PlanetWithSatellite.prototype.constructor = PlanetWithSatellite; 

PlanetWithSatellite.prototype.getName = function(){return 'Planet name is ' + this.name + 'The satellite is' + Planet.prototype.getName.call(this); }



var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’


console.log(`задание: Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.`)


class Building{
	constructor(name,numOfFloors){
		this.name = name; 
		this.numOfFloors = numOfFloors; 	
	}
	getNumOfFloors(){
		return this.numOfFloors; 
	}
	setNumOfFloors(num){
		return this.numOfFloors = num; 
	}
}

class HouseHold extends Building{
	constructor(name,numOfFloors,numOfFlatsOnFloor){
		super(name,numOfFloors); 
		this.numOfFlatsOnFloor = numOfFlatsOnFloor; 
	}
	getNumOfFloors(){
		console.log('Floors: ' + super.getNumOfFloors() + ', TotalFlats: '+ super.getNumOfFloors() * this.numOfFlatsOnFloor ); 
	}
}

class Mall extends Building{
	constructor(name,numOfFloors,numOfShopsOnFloor){
		super(name,numOfFloors); 
		this.numOfShopsOnFloor = numOfShopsOnFloor;
	}
	getNumOfFloors(){
		console.log('Floors: ' + super.getNumOfFloors() + ', TotalShops: '+ super.getNumOfFloors() * this.numOfShopsOnFloor);
	}
}

let ex = new Building('New House', 4);
let house = new HouseHold('HouseHold', 45,10); 
let karavan = new Mall('Karavan',3,70);

console.log(ex); 
console.log(house);
console.log(karavan);
	
console.log(`задание:2. Создайте класс “Здание”(пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 
	
У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
	
У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)`)


function Furniture(name,price){
		this.name = name || 'guess what'; 
		this.price = price || 'for free'; }

	Furniture.prototype.getInfo = function(){
		return 'Its a ' + this.name + 'costs ' + this.price;
	}

	function HomeFurniture(name,price,getRidOff){
		Furniture.apply(this,arguments); 
		this.getRidOf = getRidOff; 
	}

	HomeFurniture.prototype = Object.create(Furniture.prototype); 
	HomeFurniture.prototype.constructor = HomeFurniture; 

	HomeFurniture.prototype.getInfo = function(){
		return 'Its a ' + this.name + 'costs ' + this.price + 'should we get rid of it? ' + this.getRidOf; 
	}

	function OfficeFurniture(name,price,renew){
		Furniture.apply(this,arguments); 
		this.renew = renew; 

		OfficeFurniture.prototype.getInfo = function(){
			return 'Its a ' + this.name + 'costs ' + this.price + 'should we get renew the item? ' + this.renew; 
		}

	}

	OfficeFurniture.prototype = Object.create(OfficeFurniture.prototype); 
	OfficeFurniture.prototype.constructor = OfficeFurniture; 

const home = new HomeFurniture('bookshelf',450, true); 
console.log(home); 
const office = new OfficeFurniture('table', 1060, 'no need, let them use those old ones'); 
console.log(office); 




console.log(`задание:3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
“Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
Задача на переопределение метода у экземпляров класса.`)

function User(name,regDate){
	this.name = name; 
	this.regDate = regDate; 

	User.prototype.getInfo = function(){ 
		return "User's name is " + this.name + ' with the registration date ' + this.regDate; 
	}
}

function Admin(name,regDate){
	User.call(this,name,regDate); 
}
function superAdmin(superAdmin){
	this._superAdminId = superAdminId; 
}

Admin.prototype = Object.create(User.prototype); 
Admin.prototype.constructor = Admin; 

Admin.prototype.getInfo = function(){
	return "Admin's name is " + this.name + ' with the registration date ' + this.regDate + 'and super admin id is ' + this._superAdminId; 
}

function Guest(name,regDate){
	User.call(this,name,regDate); 
	this.validDate = new Date() - new Date(parseInt(regDate)); 
}

Guest.prototype = Object.create(User.prototype); 
Guest.prototype.constructor = Guest; 

Guest.prototype.getInfo = function(){
	return "Guest's name is " + this.name + ' with the registration date ' + this.regDate + 'and valid date ' + this.validDate; 
}


const user = new User('Batman', '1990,6,17'); 
const admin = new Admin('Joker', '1989,4,5', 6456536); 
const guest = new Guest('CatWoman', '2000,01,12'); 

console.log(user); 
console.log(admin); 
console.log(guest); 




console.log(`задание:4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
true/false, должно быть скрытым). Свойства определяются в момент вызова
конструктора.
У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
`)

console.log(`задание:`)
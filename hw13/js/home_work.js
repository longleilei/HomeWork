function promiseCreator(executionTime, value) {

  //create object Promise 
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(value);
    },executionTime);
  })
}; 

//inlude promise.then 

/*
promiseCreator.then(
  result => {
    const prom = promiseCreator(500, 'Ok!');
    console.log(prom); 
  }, 
  error => {
    console.log('Rejected')
  }
)*/


const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok!


console.log(`задание: Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.
результат:; 
объяснение: `) 


/*
class Prom {
  constructor(){
      this.promise = promise; 
  }
  resolve(){
    if(!reject){
      return this.promise; 
    }
    else{
      return reject(this.promise); 
    }
  }
    
  reject(){
      let rejected = new Error(this.promise + $` doesn\'t work`); 
        reject(rejected);
  };
} 

const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve('test'), 5000); 


*/

/*class Prom {
  constructor(promise){
      this.promise = promise; 
  }
  promise  =  new Promise((resolve, reject)=>{
    resolveProm(value => resolve(value));
    rejectProm(() =>
      //let rejected = new Error(this.promise + $` doesn\'t work`); 
      reject(rejected)); 
    })
}*/ 
  
/*
const inst = new Prom();
inst.promise.then(data => console.log(data));
setTimeout(() => inst.resolve('test'), 5000); */ 



console.log(`задание: Создать класс, который производит экземпляр со следующими свойствами:
- promise - промис, который создается во время запуска конструктора;
- reject - метод, при выполнении которого promise реджектится;
- resolve - метод, при выполнении которого promise резолвится.
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 

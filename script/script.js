// 'use struct';
// window.onload=function (){
//
// };

document.addEventListener("DOMContentLoaded", right_arrow);
var mas = ["image/01.jpg","image/2.jpg","image/1.jpg"];
var to = 0;  // Счетчик, указывающий на текущую картинки
var file_path = '../4!/image/';

$('#add_file').on('click', function(){
  console.log('Open File Dialog');
  $('#input_file').trigger('click');
});

$(':file').change(function(e){
  file_path += e.target.files[0].name;
  console.log(file_path);
  mas.push(file_path);
  file_path = '../4!/image/';
});

function right_arrow() // Открытие следующей картинки(движение вправо)
{
 var obj = document.getElementById("slider");
  if (to < mas.length-1)  to++
   else
     to = 0;
     obj.src = mas[to];
     setCookie("foo", mas[to] , "", "/");	 // запоминаем текущую картинку
}

function left_arrow()
{
 var obj = document.getElementById("slider");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];
    setCookie("foo", mas[to] , "", "/");	 // запоминаем текущую картинку
}

function setCookie(name, value, expires, path, domain, secure) // Ф-ция создания куки
{
 if (!name || !value) return false;
    var str = name + '=' + encodeURIComponent(value);
        if (expires) str += '; expires=' + expires.toGMTString();
        if (path)    str += '; path=' + path;
        if (domain)  str += '; domain=' + domain;
        if (secure)  str += '; secure';
  document.cookie = str;
  return true;
}


function deleteImg() {
  if (mas.length-1 < 1) {
    alert('Это последняя картинка, её нельзя удалить');
  }
  else {
    alert(mas.length);
    mas.splice(to,1);
      alert(mas.length);
  }
  to--;
  right_arrow();
}


slides = document.getElementsByClassName("slide");
containerWidth = 1100;


Array.prototype.forEach.call(slides, function (el, i) {//set the initial position of each slide
    el.style.left = (i * containerWidth) + "px";
});


window.moveSlides = function (direction) {
    run = true;
    tracker = containerWidth; //500 in this example. We make a separate variable so we can decrement it

    if (((direction == "next" && (parseInt(slides[0].style.left) <= (0 - (containerWidth * (slides.length - 1)))))) //compare against 2nd-to-last slide's index, otherwise it'll go 1 slide too far
        || (direction == "prev" && (parseInt(slides[0].style.left) >= 0))) { run = false; }

    if (run) {
        var slideInterval = setInterval(function () {
            moveRate = 4; //set the speed here (use numbers that the container's width can be divided by without a remainder)
            Array.prototype.forEach.call(slides, function (el, i) {
                if (tracker <= 0) {
                    clearInterval(slideInterval)
                } else {
                    el.style.left = (direction == "next") ? (parseInt(el.style.left) - moveRate) + "px" : (parseInt(el.style.left) + moveRate) + "px";
                }
            });
            tracker -= moveRate;
        }, 1);
    }
}


// function soundClick() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = '123.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }


// // сделать запрос
// httpGet('/article/promise/user.json')
//   // 1. Получить данные о пользователе в JSON и передать дальше
//   .then(response => {
//     console.log(response);
//     let user = JSON.parse(response);
//     return user;
//   })
//   // 2. Получить информацию с github
//   .then(user => {
//     console.log(user);
//     return httpGet(`https://api.github.com/users/${user.name}`);
//   })
//   // 3. Вывести аватар на 3 секунды (можно с анимацией)
//   .then(githubUser => {
//     console.log(githubUser);
//     githubUser = JSON.parse(githubUser);
//
//     let img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.appendChild(img);
//
//     setTimeout(() => img.remove(), 3000); // (*)
//   });

// res = prompt('Чему будет равно i', 5);
// var i = res;
//
// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(i == 5){
//       resolve('result');
//     }
//     else {
//       reject('i неравно 5 (ошибка)');
//     }
//   },1000);
// });
//
// promise
//   .then(
//     result => alert('Fulfilled:' + result),
//     error =>  alert('Rejected:' + '\n' + error)
//   );


// let recipeMap = new Map([
//   ['огурцов',   '500 гр'],
//   ['помидоров', '350 гр'],
//   ['сметаны',   '50 гр']
// ]);
//
// // цикл по ключам
// for(let fruit of recipeMap.keys()) {
//   alert(fruit); // огурцов, помидоров, сметаны
// }
//
// // цикл по значениям
// for(let amount of recipeMap.values()) {
//   alert(amount); // 500 гр, 350 гр, 50 гр
// }
// recipeMap.forEach( (value, key, map) => {
//   alert(`${key}: ${value}`);
//
// // цикл по записям [ключ,значение]
// for(let entry of recipeMap) { // то же что и recipeMap.entries()
//   alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
//
// let map = new Map();
//
// map.set('1','str1');
// map.set(1,'num1');
// map.set(true,'bool1');
// map   //ЧЕЙН
//   .set(2,'num2')
//   .set(3,'num3');
//
// alert(map.get(1));
// alert(map.get(true));
// alert(map.size);




// // FOR OF
// let arr = [1, 2, 3]; // массив — пример итерируемого объекта
//
// for (let value of arr) {
//   alert(value); // 1, затем 2, затем 3
// }
// for (let char of "Привет") {
//   alert(char); // Выведет по одной букве: П, р, и, в, е, т
// }


//ХОРОШИЙ КОД  функция createModel в примере ниже создаёт объект по классу и данным, добавляет ему _id и пишет в «реестр» allModels:
// let allModels = {};
//
// function createModel(Model, ...args) {
//   let model = new Model(...args);
//
//   model._id = Math.random().toString(36).slice(2);
//   allModels[model._id] = model;
//
//   return model;
// }
//
// let user = createModel(class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }, "Вася");
//
// user.sayHi(); // Вася
//
// alert( allModels[user._id].name ); // Вася

// let kal = 0;

// class User {
//   constructor(name, rename){
//     let kleymo = 'Клеймо';
//     this.name = name + ' ' + kleymo;
//     if (name.length >= 5){
//       this.name = name;
//     }
//     this.rename = rename;
//     kal += 1;
//     alert('Привет создатель\n' + 'Имя: '+this.name + '| Второе имя: ' + this.rename + '\nСущество номер: ' + kal);
//
//   }
//   fly(){
//     alert('I fly bitch' + this.name);
//   }
// }
//
// let stanli = new User('Par', 'Abu');
// let stanley = new User('Frank','Mazowsky');
//
//  class SuperUser extends User {
//    constructor(al) {
//      super('Ad','Grub');
//      this.al = al;
//    }
//    flyJump(){
//      super.fly();
//      alert(this.al);
//    }
//  }
// new SuperUser('fa').flyJump();

// let animal = {
//   walk() {
//     alert("I'm walking");
//   }
// };
//
// let rabbit = {
//   __proto__: animal,
//   walk() {
//     alert(super.walk); // walk() { … }
//     super.walk(); // I'm walking
//   }
//   walk() {
//    setTimeout(() => super.walk()); // I'm walking
//  }
// };
//
// rabbit.walk();
//
// let user = {
//   name: 'Palc',
//   sayHi() {
//     alert(this.name);
//   },
//     get name1() {
//       return this.name;
//     },
//     set name1(value) {
//       this.name = value + '1';
//     }
// }
// user.sayHi();
// user.name1 = 'Victory';
// alert(user.name1);


// function defer(f,ms){
//   return function(){
//     setTimeout(() => f.apply(this, arguments),ms)
//   }
// }
// function sayHi(who){
//   alert('Privet ' + who);
// }
// let sayHi1 = defer(sayHi,1000);
// sayHi1('Peter');
//
//
// function defer1(f,ms){
//   return function(){
//     let ctx = this;
//     let args = arguments;
//     setTimeout(function(){
//       f.apply(ctx, args);
//     },ms);
//   }
// }
// function sayHello(who){
//   alert('Hello ' + who);
// }
// let sayHello1 = defer1(sayHello,1000);
// sayHello1('Abu');

// //СОРТИРОВКА ЧИСЕЛ
// let arr = [5, 8, 3];
//
// let sorted = arr.sort( (a,b) => a - b );
//
// alert(sorted); // 3, 5, 8
//
// //ВЫЗОВ БЕЗ АРГУМЕНТОВ
// let getTime = () => {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   return hours + ':' + minutes;
// };
// alert( getTime() ); // текущее время
//
// let inc = (x,a) => x+1+a; // КРАТКАЯ ЗАПИСЬ ФУНКЦИИ АНАЛОГ: let inc = function(x,a) { return x + 1 + a; };
// alert( inc(1,2) ); // 2
//
// function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
//   alert(title + ' ' + w + ' ' + h);
// }
// showMenu(); // Заголовок 100 200
// alert(showMenu.name);
// let options = {
//   title: "Меню"
// };
// function showMenu({title="Заголовок", width:w=100, height:h=200}) {
//   alert(title + ' ' + w + ' ' + h);
// }
//
// // объект options будет разбит на переменные
// showMenu(options); // Меню 100 200
// let numbers = [2, 3, 15];
//
// // Оператор ... в вызове передаст массив как список аргументов
// // Этот вызов аналогичен Math.max(2, 3, 15)
// let max = Math.max(...numbers);
//
// alert( max ); // 15
//
// function getCurrentUser(name) {
//   return name;
// }
// function showMenu(title = getCurrentUser('Вася'), width = 100, height = 200, ...rest) {
//   alert(title + ' ' + width + ' ' + height + ' ' + rest);
// }
//
// showMenu( undefined,undefined, 50, 500, 777); // Меню 100 200

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Пончик", "Пирожное"]
// }
//
// let { title="Меню", size: {width, height}, items: [item1, item2] } = options;
//
// let options = {
//   title: "Меню",
//   width: 100,
//   height: 200
// };
// let {title, width:w=100, height:h=100} = options;
//
// function defaultLastName() {
//   return Date.now() + '-visitor';
// }
// let [name='unnamed',rename='unrenamed'] = ['abu',defaultLastName()];
// alert(name);
// alert(rename);
//
// // первый и второй элементы не нужны
// let [,title, ...rest ] = "Юлий Цезарь Император Рима".split(" ");
// alert(title); // Император
// alert(rest);

// var Working = function(){
//   let b = 777;
//   var q = 888;
//   if (true){
//     let b = 111;
//     var q = 222;
//     alert(b + '   '+ q);
//   }
//   alert(b + '   '+ q);
// }
//
// work = new Working();

// var q = 1;
//
// let a = 5;
// if (a = 5 ){
//   var q = 2;
//   let a = 10;
//   alert(a + '  ' + q);
// }
// alert(a);
// alert(q);


// function work(a, b) {
//   return a + b;
// }
//
// function worker(a,b,c){
//   return a+b+c;
// }
//
// function makeLogging(f, log) {
//   return function(){
//     var result = f.apply(f, arguments);
//     log[i] = result;
//     i++;
//   }
// }
// var log = [];
// var loer = [];
// var i = 0;
// work = makeLogging(work, log);
// worker = makeLogging(worker,loer);
// worker('Abu','Grisha','Niva');
// alert(loer[0]);
// work(1, 2); // 3
// work(5,10);
// work(1,55);
//
// var a = ' ';
// for(var i=0;i<log.length;i++){
//   alert(log[i]);
//   b = String(log[i])
//   a += ' ' + b;
// }
// alert(a);

// function bind(func, context){
//     return function(){
//       return func.apply(context,arguments);
//     };
// }
//
//
// var Sus =  function(){
//   this.firstname = 'qwe';
//   this.aga = function(){
//     alert(this.firstname + '  привет');
//   };
// }
// sus1 = new Sus();
// setTimeout(bind(sus1.aga, sus1),1000);




// var eventRain = {
//   rain: function(eventName,handler){  // handler - это то, что наступит, если случится eventName
//     if(!this._eventHandlers) this._eventHandlers = {};
//     if(!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },
//
//   offRain: function(eventName, handler){
//     var handlers = this._eventHandlers && this._eventHandlers[eventName];
//     if (!handlers) return;
//     for(var i=0; i<handlers.length; i++) {
//       if (handlers[i] == handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   }
// }
//
// trigger: function(eventName /*, ... */) {
//
//   if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//     return; // обработчиков для события нет
//   }
//
//   // вызвать обработчики
//   var handlers = this._eventHandlers[eventName];
//   for (var i = 0; i < handlers.length; i++) {
//     handlers[i].apply(this, [].slice.call(arguments, 1));
//   }
//
// }
// };



//ПРИМЕСЬ
// var sayHiMixin = {
//   sayHi: function() {
//     alert("Привет " + this.name);
//   },
//   sayBye: function() {
//     alert("Пока " + this.name);
//   }
// };
//
// // использование:
// function User(name) {
//   this.name = name;
// }
//
// // передать методы примеси
// for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];
//
// // User "умеет" sayHi
// new User("Вася").sayHi(); // Привет Вася

// function FormatError(message){
//   this.message = message;
//   this.name = "FormatError";
//   if (Error.captureStackTrace){
//     Error.captureStackTrace(this,this.constructor);
//   }
//   else {
//     this.stack = (new Error()).stack;
//   }
// }
//
// FormatError.prototype = Object.create(SyntaxError.prototype);
// FormatError.prototype.constructor = FormatError;
//
// var err = new FormatError("ошибка форматирования");
//
// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // стек на момент генерации ошибки
//
// alert( err instanceof SyntaxError ); // true
// function Clon() {
//   this.age = 0;
//   this.height = 0;
// }
// Clon.prototype.fly = function(age,speed){
//   this.age = age;
//   this.speed = speed;
//   alert(this.age + ' ' + this.height + ' ' + this.speed );
// }
// var clons = new Clon();
// clons.fly(55,65);
// function Clons() {
//   this.weight = 0;
//   this.height = 0;
//   this.walk = function(weight,height){
//     this.weight = weight;
//     this.height = height;
//     return this.height+'  '+this.weight;
//   }
// }
// var clon = new Clons();
// alert(clon.walk(55,155));
// function Machine(power) {
//   this._power = power;
//   this._test = false;
//   this.testOn = function() {
//     test = true;
//     alert(test);
//   }
//   this.testOff = function(){
//     test = false;
//     alert(test);
//   }
// }
//
// function CoffeeMachine(power, capacity) {
//   Machine.apply(this, arguments);
//   var waterAmount = 0;
//   var waterAm = 0;
//   this.waterAmount = function(amount,amount1) {
//     if (amount1 < 0) {
//       alert('error');
//       throw new Error("Значение должно быть положительным")
//     }
//     if (amount1 > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }
//     // вызов без параметра, значит режим геттера, возвращаем свойство
//     if ((amount != undefined) && (amount1 != undefined)){
//       alert('Первое значение: '+amount+'\nВторое значение:'+amount1);
//       return amount,amount1;
//     }
//     else if((amount != undefined) && (amount1 == undefined)) {
//       alert('Первое значение: '+amount);
//       return amount;
//     }
//     else if ((amount == undefined) && (amount1 != undefined)) {
//       alert('Второе значение:'+amount1);
//       return amount1;
//     }
//
//     var parentTest = this.testOn;
//     this.testOn = function() {
//       alert('abc');
//     }
//   };
// }
//
// var coffeeMachine = new CoffeeMachine(1000, 500);
// coffeeMachine.waterAmount(undefined,-150);
// coffeeMachine.testOn();
// catch(e) {
//
//   alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
//
// }

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }
// ask('Kavo?','123',tru,fal);
//
// function tru () {
//   alert('Verno');
// }
// function fal (){
//   alert('Neverno');
// }


// var user = {
//   firstname:"Abu",
//   lastname: "Rah",
//   sayHi: function() {
//     alert('Привет'+this.firstname+this.lastname);
//   }
// }
// var g = user.sayHi.bind(user);
// setTimeout(g, 10000);
// function User(fullName) {
//   this.fullName = fullName;
//
// };
//
//
//
// var vasya = new User("Василий Попкин");
// Object.defineProperties(vasya,{
//   firstname: {
//   get: function() {
//      return this.fullName.split(' ')[0];
//   }
// },
//   lastname: {
//     get: function() {
//        return this.fullName.split(' ')[1];
//   }
// }
//
// });
// alert(vasya.firstname);
// alert(vasya.lastname);
// alert(vasya.lastname);

// var user = {
//   name: "Вася",
//   toString: function() { return this.name; }
// };
//
// // помечаем toString как не подлежащий перебору в for..in
// Object.defineProperty(user, "toString", {enumerable: false});
//
// for(var key in user) alert(key);  // name
//
//
//
// var user = {
//   firstName: "Вася",
//   surname: "Петров",
//
//   get fullName() {
//     return this.firstName + ' ' + this.surname;
//   },
//
//   set fullName(value) {
//     var split = value.split(' ');
//     this.firstName = split[0];
//     this.surname = split[1];
//   }
// };
//
// alert( user.fullName ); // Вася Петров (из геттера)
//
// user.fullName = "Петя Иванов";
// alert( user.firstName ); // Петя  (поставил сеттер)
// alert( user.surname ); // Иванов (поставил сеттер)



// var user = {
//   firstName: 'Fa',
//   toString: function() {
//     return 'Пользователь ' + this.firstName;
//   }
// };
//
// alert( user ); // [object Object]

// var calculator = {
//
//   read: function(){
//     this.a = +prompt('Введите первое число',0);
//     this.b = +prompt('Введите второе число',0);
//   },
//   sum: function(){
//
//     return this.a + this.b;
//   },
//   mul: function(){
//     return Number(this.a)*Number(this.b);
//   }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// var obj = {
//   go: function() {
//     alert(this)
//   }
// }
//
// obj.go();
// var user = {
//   name: 'Василий',
//   lastname: 'Hacker',
//
//   sayHi: function () {
//     alert('Привет '+this.name+'\nПрофессия:'+this.lastname);
//   }
// }
//
//
//
// function sayHello(){
//   alert(this.name);
// }
// user.f = sayHello;
// user.f();
// user.sayHi();


// (function() {
//
//   // глобальная переменная нашего скрипта
//   var message = "Привет";
//
//   // функция для вывода этой переменной
//   function showMessage() {
//     alert( message );
//   }
//
//   // выводим сообщение
//   showMessage();
//
// }());


// function ada(a){
// function ad(b){
//   return a + b;
// }
//
// return ad;
// }
//
// alert(ada(3)(5));



// var date = new Date(2014, 11, 31, 12, 30, 0);
//
// var options = {
//   era: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   weekday: 'long',
//   timezone: 'UTC',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric'
// };
// function getWeekDate(date){
//   var days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
//   return days[date.getDay()];
// }
// var now = new Date(2019, 1, 21, 13, 29, 0);
// alert(getWeekDate(now));
//
// alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
// alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM

// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 10000; i++) f(arr);
//   return new Date() - date;
// }

// var home = 'Тут дом...'
// var planet   = 'Земля'
// var CONSTANT = 'неизменна'
// var rat = prompt('Ghbdtn', 100);
// alert(rat);
// if (rat == 100){
//   alert('Стандарт');
// } else {
//   alert('Оригинально');
// }
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// var mapping = arr.map(function(item){
// return item.length;
//
// });
//
// alert( mapping ); // 4,5,2,5

// function go (a,b,c) {
//   if (arguments.length==2) {return alert(a + ' ' + b);}
// return  alert(' q ' + a + ' w ' + b + ' e ' + c);
// }
//
// go(1,2);
// go(1,2,3);

// function getSums(a){
//   arrayq = []
//   arrayq[0] = 0;
//   var result = a.reduce(function(sum, current) {
//     arrayq[current] = sum + current;
//     alert(arrayq)
//     return arrayq;
//   }, 0);
//   return result;
// }
// alert(getSums([ 1, 2, 3, 4, 5 ]));

// var arr = ["Яблоко", "Апельсин", "Груша"];
//
// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });
// var user = {
//   name: 'Fd',
//   age: 'fds'
// };
// var putert = {};
// for (var key in user) {
//   alert(key);
//   putert[key] = user[key];
// }

// switch (x) {
//   case 1:
//   alert('gfd')
//     break;
//   case 2:
// alert('gfdgf')
//     break;
//   default:
//   alert('gfsdser')
// }
// rat==100 ? 5:100
// var result = confirm('куда идём?');
// alert(home +'  ('+ typeof(planet)+')');

const newTimer = setTimeout(() => {
	console.log('hello');
}, 5000);

//setTimeout(функция, время "через сколько" в милисек, аргумент для функции)
//устанавливает таймаут до чего-то
const newTimer2 = setTimeout((text) => {
	console.log(text);
}, 2000, 'goodbye');
//кстати, вот и нашлась особенность: время отсчитывается одновременно
//у привет 5 сек, а пока 2 сек. И неважно что привет выше
//код выполняется асинхронно, кто первее выполнил то т и вывелся
///поэтому показало сначала пока, потом привет


// можно вообще сразу функцию передавать
const newTimer3 = setTimeout(logger, 1999);
function logger (){
	console.log('logger');
}

// setTimeOut может работать и без объявления переменной
// в переменную мы его кладем лишь для того, чтобы четко разграничивать разные таймауты


//чтобы избавиться от таймаута нужна команда
clearInterval(newTimer);
//теперь у нас не запустится этот таймаут
//лучше всего это использовать в каком-то условии, как мне кажется


//------------------------------------------
//например, я хочу чтобы таймаут был неск раз
//тогда нужна функция 
//setInterval(logger,500);
//проблема ее в том, что мы не знаем сколько будет выполняться ф-ция logger
//мб она весит много и будет грузиться секунду, а каждые полсекунды будет новый интервал и новый вызов ф-ции

//пример простой анимации через интервалы
const btn = document.querySelector('button');
function myAnimation (){
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame (){
		if(pos == 300){
			clearInterval(id);
		} else{
			pos++;
			elem.style.top = pos + 'px';			
			elem.style.left = pos + 'px';
		}
	}
}
//btn.addEventListener('click', myAnimation);

//--------------------------------------------

// изучаем даты
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset()); //разница идет в минутах 

console.log(now.getTime()); //показывает количество милисекунд с 1970 года

//если мы что-то поместим в дату, то оно вернет нам определенную дату
//например
const newNow = new Date(1662708969976);
console.log(newNow);

console.log(now.setHours(18, 40)); //все методы get можно изменить на set и мы будет на получать, а устанавливать опр значения


//конструкции
//new Date('2022-SS05-17')
//new Date.parse('2022-05-17')
//абсолютно одинаковые


//бенчмарки для измерения производительности
let start = new Date(); //засекли начало

for(let i = 0; i < 100000; i++){
	let some = i ** 3;  // ** возводит в степень 3
};

//засекаем время конца цикла
let end = new Date();
console.log(`Цикл отработал за ${end - start} милисекунд`);


//-----------------------------
//попробуем сделать таймер
const input = '2022-09-15';
const newDate = Date.parse(input);

let nowNew = new Date();
let output = document.querySelector('p');
output.textContent = `итого: ${newDate}-${nowNew}`;
console.log(`итого: ${newDate}-${nowNew}`);

//.........................................................

//параметры размеров
const box = document.querySelector('.box');
const width = box.clientWidth;
const height = box.clientHeight;
//это с паддингами
console.log(width, height);

const widthOff = box.offsetWidth;
const heightOff = box.offsetHeight;
//это уже с марджинами
console.log(widthOff, heightOff);

const widthS = box.scrollWidth;
const heightS = box.scrollHeight;
//а это целиком контент, вместе со скроллами
console.log(widthS, heightS);

// самое частоиспользуемое - это
//scrollTop и scrollLeft
// они позволяют просмотреть, сколько контента еще не просмотрено(или уже просмотрено)

//например
box.addEventListener('click', ()=>{
	console.log(box.scrollTop);
});
//и получается, что когда мы пролистали, нажали кнопку
//то в консоль выводит количество пикселей, что мы уже просмотрели

//------------------------------------------------

//координаты объекта в js отсчитываются от левого верхнего угла
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);


//еще можно узнать все посчитанные компьютером(примененные к объекту) стили
const style = window.getComputedStyle(box);
console.log(style);
//ну и чтобы конкретное свойство узнать, то пишем
console.log(style.display);
//получить и поменять псевдоэлементы нельзя. Это прописано в стандарте
//но вот получить их можно через getComputed....


//----------------
//разница computed и inline стилей
//inline мы прописываем в js и добавляем прямо в строку html
//computed стили идут из css файла

//------------------------------------

//как узнать количество пикселей, которые пользователь уже пролистал на странице?
console.log(document.scrollTop); //undefiened
console.log(document.documentElement.clientWidth); //а вот так все работает
//
//
// но самое главное - это то, что мы можем это модифицировать
//document.documentElement.scrollTop = 0;
//
//scrollBy - относительно текущего
//scrollTo - перемещает относительно начала стр



//.................................................................

//создание конструкторов
//функции - это тоже частный случай объектов
//функции можно преобразовать в конструктор, например

function User(name, id){  // <-прототип
	this.name = name;
	this.id = id;
	this.human = true;
	//еще как и в объекты, можно добавлять методы
	this.sayHello = function(){
		console.log('Hello');
	};

}
const ivan = new User('Ivan', 22);  // <- ключевое слово new
console.log(ivan, ivan.sayHello());

//например, кода у нас нет доступа к конструктору напрямую или лент его искать, то
//можно обратиться к прототипу
User.prototype.leave = function(){
	console.log(`Пользователь ${this.name} ушел`)
};

ivan.leave(); //все ок, работает. Метод вызывается



//..................................................................


//контекст вызова функции. Ключевое слово THIS
//контекст - это как прописка. Вызов по месту жительства(прописки)

//1)
function showThis () {
	console.log(this);
}
showThis();

//1) в таком случае(обычная функция) будет window, но если стоит use strict, то покажет undefiened
//контекст вызова обычной функции виндов или андефайнд
function showThisTest (a, b){
	console.log(this);
	function sum(){
		console.log(this);  //и снова будет undefiened, ибо неважно где запускается. важен лишь режим работы
		//return this.a + this.b; //такая запись ничего не даст. Будет ошибка
		return a+b; //а вот через замыкание функций будет работать. Да, в этой функции он не найдет, но подниматеяс на уровень выше и там найдет

	}
	console.log(sum());
} 
showThisTest(4, 5);

//2) вызов через метод объекта. Контекст у методов объекта будет сам объект, а не window или undefiened

const newObj = {
	a: 3,
	b: 7,
	sum: function(){
		console.log(this);
		//а если в ф-ции написать и вызвать ф-цию, то что для нее контекст?
		function test1 (){
			console.log(this);
		}
		test1();
		//итого, это уже не является методлом объекта, а просто ф-ция
		// сл-но будет виндов или андефайнд
	}
};
newObj.sum();

//3) конктекст для конструкторов и классов - это новый экземпляр объекта
//выше мы писали this.name, а потом создали Ивана и уже обращались ivan.name
//т.е. вместо this у конструктора подставляется новый объект

//4) ручное присвоение this любой ф-ции
	
	function sayBye(){
		console.log(this);
		console.log(`Bye, ${this.name}`);
	} 
	let man = {
		name: 'John'
	};

	//команды ниже как бы добавляют в объект новый метод, 
	// дословно: sayBye вызывается в объекте man
	sayBye.call(man);
	sayBye.apply(man);

	//в чем разница call и apply?
	//увидим, когда передадим аргументы в функцию
	function sayWork(surname){
		console.log(this);
		console.log(`Work, ${this.name + surname}`);
	} 
	let man2 = {
		name: 'Ivan'
	};	
	sayWork.call(man2, 'Smirnov'); //будет больше аргументов, то просто прописываешь их все через запятую
	sayWork.apply(man2, ['Ivanov']); //все то же самое, но передаем в массиве
	//эти две функции не создают новых. Они работают с теми что есть

	//немного сложно понять но ты справишься
	function count(num){
		return this*num;
	} //есть функция.Теперь нужен для нее контекст
	const double = count.bind(2); //double=this, но благодаря bind теперь double является функцией
	console.log(double(5));

	////////////////

	const btnPress = document.querySelector('button');
	btnPress.addEventListener('click', function(){
		console.log(this);
		this.style.backgroundColor = 'red';
	}); //тут выведется сам элемент, т.е кнопка
	//пока колбек функция прописана через function(){} то будет именно тот элемент, на котором произошло событие

	//со стрелочной ф-цией другой функционал
	////////------------------------------
	//у стрелочной функции нет контекста вызова
	//она берет его у своего родителя (как ребенок бездомной женщины: всегда следует за ней и берет контекст от места)
	
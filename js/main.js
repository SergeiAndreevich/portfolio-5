alert('hello world!');

let numberOfFilms;
function start () {
	numberOfFilms = +prompt('Сколько фильмов вы смотрели?', ''); 
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		// statement
		numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
	}
}
start();


// alert(`Вау, целых ${numberOfFilms}`);

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//console.log(personalMovieDB);


// let nameOfFilm = prompt('Один из последних просмотренных фильмов', '');
// let rateOfFilm = prompt('На сколько его оцените?', '');
// personalMovieDB.movies[nameOfFilm] = rateOfFilm;

// console.log(personalMovieDB);

// добавить свойство в объект можно 2 путями
// через точку (аккуратно с кириллицей) movie.newProperty
//через []       movie[newProperty]

// const a = prompt('Один из последних просмотренных фильмов', ''),
// 	  b = prompt('На сколько его оцените?', ''),
// 	  c = prompt('Один из последних просмотренных фильмов', ''),
// 	  d = prompt('На сколько его оцените?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


////////////
let i = 0;
let nameOfFilm;
let rateOfFilm;


function rememberMyFilms () {
	for(let i = 0; i < 2; i++){
		nameOfFilm = prompt('Один из последних просмотренных фильмов', '');
	    rateOfFilm = prompt('На сколько его оцените?', '');
	    if (nameOfFilm != '' && rateOfFilm != '' && nameOfFilm.length < 50 && nameOfFilm.length != null) {
	   		personalMovieDB.movies[nameOfFilm] = rateOfFilm;    
	   		console.log('done');
	    } else{
	     	alert('Error. Do it again');
	     	i--;
	    }

	};	
}
rememberMyFilms();

function detectPersonalLevel () {
	if(personalMovieDB.count < 10){
		console.log('Мало');
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Классика');
	} else if(personalMovieDB.count >=30){
		console.log('Киноман');
	}else {
		console.log('Ошибка');
	};
}
detectPersonalLevel();

// function showMyDB () {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	}
// }
//showMyDB();
//или можно проще
function showMyDB (hidden){
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 0; i < 3; i++){
		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
	    if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
		}
	}
}
writeYourGenres();

function sayHi () {
	console.log('Hello');
}; ///declaration

sayHi();

const newFunc = function (text) {
	console.log(text);
};   ///epression

newFunc('hello everyone');



const newSentence = 'One more word';
console.log(newSentence.indexOf('fuck')); //то есть мы так можем проверить, есть ли это 
//если есть, то вернет где. Нет? тогда будет -1

console.log(newSentence.slice(-4,-1));
//обрезает справа. Должно быть wor
// да, так и вышло. (3,8) то вырежет с 3 по 8, не включая 8
//substring()=slice(), только сабстринг не поддерживает отрицательные числа: он их интерпретирует в ноль

console.log(newSentence.substr(4,4));
//с какого эл-та начать и сколько штук вырезать


const numb = 15.2;
console.log(Math.round(numb));
//внутри браузера уже есть встроенная библиотека Math
// в основном она нужна лишь для округления. Но там вся математика есть

const test = '12.7px';
console.log(parseInt(test));
//парс это преобразование в др тип данных. В данном случае вернет только число 12
//парсФлоат возвращает десятичные значения (крч с точкой)


//анонимные функции
function learnJS(lang, callback) {
	console.log(`я изучаю ${lang}`);
	callback();
}

learnJS('JavaScript', function () {
	console.log('callback function');
})
// либо написать отдельную функцию 
// function back () { 	console.log('callback function');} а затем
// прописать learnJS('Js', back) без скобок. Ибо back меняется местами с callback
// а там уже есть скобки

//методы объектов
// перебор разобает через for in (фор оф не будет работать)
// for (let key in personalMovieDB){
// 	console.log(`У свойства ${key} значение ${personalMovieDB[key]}`);
//}
// почему пишет object Object? 
// потому что при переборе мы все преобразуем в строки и это попытка js представить объект в виде строки
// можно схитрить и сделать проверку на объект. Если это объект, то перебрать все его элементы и вывести как строки
for (let key in personalMovieDB){
	if(typeof(personalMovieDB[key]) === 'object'){
		for(let i in personalMovieDB[key]){
			console.log(`У свойства ${i} значение ${personalMovieDB[key][i]}`);
		}
	} else {
	console.log(`У свойства ${key} значение ${personalMovieDB[key]}`);}  
}

// для удаления свойств имеется функция delete
// delete personalMovieDB.privat

//как посчитать количество свойств в объекте? свойства length нету и самое простое решение - счетчик
// создаем переменную counter и counter++ каждый раз 
// другой спосо заключается в ключах
// console.log(object.keys(personalMovieDB));  
//мы получим массив с названиями ключей. А далее зная свойство length можем легко посчитать количество ключей в массиве
// object.keys(personalMovieDB).length

//также мы можем сами создавать методы объектов через функции
const options = {
	name: 'test',
	height: 1024,
	width: 1024,
	style: {
		border: '1px',
		color: 'black'
	},
	makeTest: function () {
		console.log('test')
	}
};

options.makeTest();
// есть более продвинутые штуки как аксцессоры get и set но это далее
// сейчас познакомимся с деструктуризацией объекта
// я могу вытащить свойства бордер и колор без перебора объекта
const {border, color} = options.style;
console.log(border);
//да, все работает. В консоли прописался 1px
// все в js идет от объектов. Поэтому это объектно-ориентированный язык, но если говорить точнее, то прототипо-ориентированный



//массиы и их методы
const arr = [1, 5, 8, 13, 4, 2];
arr.pop();//удаляет последний элемент массива
arr.push(7); //добавляет в конец
// методы шифт и аншифт добавл/удал элемент в начале массива, но используется редко тк удаляя из начала придется менять нумерацию всех ост элементов массива

// перебор массива: либо через цикл for, либо for(let value of arr)
// for of работает только с массиво-подобными сущностями

// arr.length вопрос: как соотносятся номера массива и длина
// длина массива - это последний номер(индекс) в массиве +1

// перебор массива
arr.forEach(function(item, i, array){
	console.log((`${i}: ${item} внутри массива ${arr}`))
});
// item - элемент, i-номер по порядку, arr-ссылка на массив
//обычно все используют форич. Фороф нужен лишь из-за брейк и континью
// форич не трансформирует массив, а просто перебирает. А вот другие трансформируют


//разделить строку в масссив
const str = 'привет, пока, вечер, хата, ночь';
 const res = str.split(', '); // разделяет по правилу. из строки в массив

res.sort(); //сортировка. по умолчанию по алфавиту
 //у метода сорт особенность: он сортирует как строки. поэтому если
 //ввести числа 2, 13, 1, 18, 26, 8 будет 1, 13, 18, 2, 26, 8.
 //но этого можно избежать с помощью колбек ф-ции
 //function compareNum (a, b){
 // 	return a-b;
 // }
 //и потом передаем в сорт как параметр. str.sort(compareNum);


 console.log(res.join('; ')); // объединяет по правилу. из массива в строку

// псевдомассивы - это структура, которая хранит данные по поряду
// например [2, 6, 1, 12, 5]  НО! с ними не работает ни один метод
// они нужны лишь для хранения данных и только




// ВАЖНО
// примитивные типы данных передаются по значению
//объекты(и объектоподобные сущн) передаются по ссылке
const obj = {
	a: 5,
	b: 1
};
const copy = obj;  //ссылка на уже существующий объект obj
copy.a = 10; // тут мы модифицируем копию. НО! Мы на самом деле модифицируем ссылку, а ссылка идет на главный объект
//как же тогда создавать копии объектов??
// самое просто - это сделать перебирающую функцию
function copyNew(mainObj) {
	const copyObj = {};
	for(let key in mainObj){
		copyObj[key]=mainObj[key];
	};
	return copyObj;
}


const numbers = {
	a: 7, 
	b: 3,
	c: {
		x: 1,
		y: 9
	}
};
const newNumbers = copyNew(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);
//мы смогли скопировать объект и даже поменять в нем свойтсво. Но!
// есть поверхностное и глубокое клонирование
//здесь поверхностное, поэтому при изменение х и у (они внутри объекта с)
//у нас изменения будут как по ссылке. то есть везде
//а вот при глубоком клонировании можно менять только в одном месте
// поверхностная копия независимо копирует все свойства без вложенности, а свойства со вложенностью передаются по ссылке


const add = {
	d: 16, 
	e: 5
};

console.log(Object.assign(numbers, add));
//благодаря свойству assign мы получили независимую копию объекта (верхн уроверь. вложенность все равно по ссылке)
const clone = Object.assign({}, numbers);
console.log(numbers);
console.log(clone);
clone.c.x = 10;
console.log(clone);

// а как скопировать массив? да, можно циклом, но еще
// поверхностная копия делается через
const oldArr = ['a', 'b', 'c'];
const midArr = oldArr; //если сделать так, то будет копия ссылки и объекты будут зависимыми
const newArr = oldArr.slice(); //в слайс еще можно добавить количество копируемых эл-тов


// в стандарте ес6 есть для массивов, а в ес8 и для объектов
//спрэд-операторы. они разворачивают сущность в набор данных
const video = ['youtube', 'vimeo', 'rutube'],
	  blogs = ['wordpress', 'blogger'],
	  internet = [...video, ...blogs, 'vk', 'facebook'];
	  console.log(internet); 

function log (a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}
const num = [2, 5, 7];
log(...num);

// как это поможет сделать поверхностную копию? легко
const aarr = ['a', 'b'];
const newAarr = [...aarr];
// or
const q = {
	one:1
};
const newQ = {...q};


///////////////////////
// основы ООП и его подвид(стиль) Процедурно-ориентированный 
//
//
// в js все методв на примитивах работают как на объектах. 
// Например строка. "хай". Это примитив. но когда мы добавляем .toUpperCase это перестает быть строкой
// логика такая строка -> объект, выполнение метода -> строка
//
// в js все наследуется от объекта. Прототипом всего является объект, поэтому методы у массива, которых например нет у массивов, могут быть у объекта и у данного массива в тч
// ООП - это создание архитектуры. И мы тоже можем создавать объекты и их прототипы
const soldier = {
	health: 400,
	armor: 100,
	sayHi: function (){
		console.log('Hello')
	}
};

// const john = {
// 	health:100
// };
// john.__proto__ = soldier;
//
//или Object.setPrototypeOf(john, soldier);
//но это постфактум создание объекта по прототипу. Так никто не делает

//чтобы создать объект по его прототипу нужно
const john = Object.create(soldier);
//и у джона будет броня в наследство от прототипа и метод приветствия
john.sayHi();




// практика ч.4. Рефакторинг(переписывание под новые условия) персональной БД по фильмам
// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
	
// 	start: function (){
// 		personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', ''); 
// 		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
// 		}
// 	},
	
// 	detectPersonalLevel: function(){
// 		if(personalMovieDB.count < 10){
// 			console.log('Мало');
// 		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 			console.log('Классика');
// 		} else if(personalMovieDB.count >=30){
// 			console.log('Киноман');
// 		}else {
// 			console.log('Ошибка');
// 		}
// 	},

// 	rememberMyFilms: function(){
// 		for(let i = 1; i <= 3; i++){
// 		const a = prompt('Один из последних просмотренных фильмов', '');
// 	          b = prompt('На сколько его оцените?', '');
// 	    if (a != '' && b != '' && a.length < 50 && a.length != null) {
// 	   		personalMovieDB.movies[a] = b;    
// 	   		console.log('done');
// 	    	} else{
// 	     	alert('Error. Do it again');
// 	     	i--;
// 	    	}
// 		};
// 	},
// 	toggleVisibleMyDB: function(){
// 		if (personalMovieDB.privat) {
//  			personalMovieDB.privat = false;
//  		} else { personalMovieDB.privat = true;}
// 	},
// 	showMyDB: function (hidden){
// 		if (!hidden) {
// 		console.log(personalMovieDB);
// 		}
// 	},
// 	writeYourGenres: function() {
// 	for (let i = 0; i < 3; i++){
// 		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
// 	    if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
// 		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
// 		i--;}
// 		}
// 		personalMovieDB.genres.forEach( function(item, i) {
// 			console.log(`Любимый жанр ${i+1} - это ${item}`);
// 		});
// 	}
// };


// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);
// personalMovieDB.toggleVisibleMyDB();
// console.log('---')
// personalMovieDB.showMyDB(personalMovieDB.privat);


//динамическая типизация данных
// в строку: String(); конкатинация;     // важно! пользователь вводит всегда строки! От пользователя ты получаешь всегда строки!
// в число: ParseInt(); (+'5') - унарный плюс; Number();
// в булевое: переприсваивание; Boolean(); (!!'444' - такая запись тоже превратит в булевое значение
// всегда ложь: 0, '', NaN, null, undefined



// решение задач с собеседования
// let x = 5; alert( x++ ); ? Ответ 5. Инкремент постфиксный, поэтому так
//
//[ ] + false - null + true ? строка минус нал будет NaN, ну и NaN + true = NaN
// [] - пустой массив равен пустой строке. То есть []+false => '' + false, т.е. ответ 'false'
//
//let y = 1; let x = y = 2; alert(x); ? Ответ 2
//читается справа налево присваивание. Сначала поменяли у, затем х присвоили у
//
//[ ] + 1 + 2? Ответ '12'
// конкатинация строк
//
//alert( "1"[0] )? Ответ 1
// к каждой строке можно обратиться поэлементно. Тут строка из 1 элемента и мы обращаемся к нему же
//
//2 && 1 && null && 0 && undefined ? Ответ null
// Логический оператор "и" всегда запинается на лжи. В данном случае он выведет самую первую ложь
//
// есть ли между ними разница !!( a && b ) и (a && b)?   Ответ да, есть
// !! возвращают булевое значение. и поэтому типы данных будут разные
//
//alert( null || 2 && 3 || 4 ); ? ответ 3
//приоритет у И выше. результат логической операции одинаковых типов будет самое правое значение, т.е. здесь это 3
//ИЛИ запинается на правде, т.е. null || 3 = 3;
// 3 || 4, запинается на правде . то есть ответ 3
//
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// нет, идет ссылка на место в памяти.
// •	Что выведет этот код: alert( +"Infinity" ); ?
// число infinity
// •	Верно ли сравнение: "Ёжик" > "яблоко"?
// ? false. Нужно открыть таблицу юникода и посмотреть там
//
//0 || "" || 2 || undefined || true || falsе ? Ответ 2 тк первую истину выводит

//
/////////////////////
//
// Работа с документом/ Работа с DOM
// получить 1 элемент можно: document.getElementById('box');  тк ID - это уникальный идентификатор. то получаем этот элемент
//
// document.getElementByTagName('box'); получаем псевдомассив
const collection = document.getElementsByTagName('h3'); // мы получим коллекцию из всех h3
console.log(collection);
// Максимум внимания!!!
// Мы получаем псевдомассив, т.е. на нем не работают методы. Тогда как рабоать с его элементами??
// Пользуемся знаниями о массивах ->
// обращаемся к конкретному элементу
console.log(collection[1]);
// Либо если мы сразу хотим получить только определенный элемент, то пишем
const newElement = document.getElementsByTagName('h3')[1]; // 
//  Важно!!! Если мы таким образом обращаемся к тегу, а он всего один на весь документ, например h1, 
//  То мы все равно получим html-коллекцию. Таким образом, мы не можем взаимодействовать с элементом
//  Единственно правильный вариант работы с такими элементами - это newElement[0];
//
//
// document.getElementsByClassName('slider__item'); без точек тк уже знаем что обращаемся к классу
// эта команда также возвращает нам html-коллекцию
// ЗАМЕЧАНИЕ: даже в названии метода указано getElements во множественном числе
// \ а в getElementById единтвенное. Логика)
//
//
// document.querySelectorAll('.box-btn'); // возвращает псевдомассив, но ОСОБЕННЫй [NodeList]
// на коллекции через квериселектор работает метод forEach();
//
// только один(первый) элемент по названию класса document.querySelector('.heart')
const try1 = document.querySelector('.slider__item');
const try2 = document.querySelectorAll('p');
console.log('----');
console.log(try1);    //при обращении к элементу по классу выводится содержимое, т.е. slider__item со всеми дочерними классами. Таким образом я могу менять его через квериселектор
console.log('----');
console.log(try2);    //а вот тут уже выводится нодЛист
console.log('----');
console.log(try2[3]); //при таком обращении я также как и в квериСелектор обращаюсь к элементу вместе с его содержимым и могу менять
//
//
//
// Попрактикуемся в изменении элементов
// 
const box = document.getElementById('p-new'),
	titles = document.getElementsByTagName('h3'),
	sliders = document.getElementsByClassName('slider__item'),
	titles2 = document.querySelectorAll('h3'),
	oneHeart = document.querySelector('p');

box.style.color = 'white'; //задание свойств таким образом идет через КэмелКейс
//не забывай сохранять html файл, когда добавляешь id

titles[0].style.fontSize = '48px'; //помним про коллекции и обращаемся к элементам через []

sliders[2].style.backgroundColor = 'blue';

// можно с помощью цикла перебрать все элементы коллекции и изменить
for (var i = 0; i < titles2.length; i++) {
	titles2[i].style.color = 'red';
};
// но так никто не делает. Можно иначе
// все делают через forEach
titles2.forEach( item => {
	item.style.opacity = '70%';
});


//
//
// далее изучим методы для работы с элементами на странице.
//
// например в реакте работа идет на скриптах. Вот и мы сейчас научимся добавлять новые элементы в верстку через js
const newThing = document.createElement('div'); // мы создали элемент и он существует только в js-файле. НА странице html он никак не появится от такой команды
//
//теперь посмотрим как создаются текстовые узлы
//const text = document.createTextNode('тут был я');  //но этот метод используется крайне редко
//
//как добавить свойства, но не через style?
newThing.classList.add('black'); // мощная штука classList 
// и теперь нужно как-то вставить данный элемент в html
document.body.append(newThing);
//
// либо можно сразу и обратиться и добавить
//document.querySelector('.slider').append(newThing);
const slider = document.querySelector('.slider');
//
// append добавляет в конец, а вот чтобы добавить в начало нужно preappend
//slider.preappend(newThing);
//
// добавить перед чем-то или после чего-то - это
oneHeart.before(newThing); 
//oneHeart.after(newThing);
//
//чтобы удалить есть свойство ремув
titles2[2].remove();
//
// а чтобы один элемент заменить другим у нас есть:
titles2[3].replaceWith(box);  // особенность в том, что мы при замене не копируем, а реально забираем с одного места и ставим на другое
//
//
// нужно знать! Эти конструкции устарели но могут встретиться - -
// document.body.appendChild('box');
// раньше методов preappend, before, after не существовало, был лишь метод insertBefore
//titles2.insertBefore(newThing, sliders[0]); // что вставить, куда вставить
//
// еще раньше не было метода ремув. Был метод ремувЧайлд
//titles2.removeChild(titles[1]);
//
// также не было реплэйс. Был реплэйсЧайлд
//titles2.replaceChild(node: Node, child: Node); //на что заменить, тот эемент который меняется
// в старых методах все через родительский класс меняется
// то есть чтобы поменять h3, нужно повзаимодействовать с его родителем div.x и потом поменять на что-то
// целых 3 аргумента
//
//
//
// двигаемся дальше. А как например вставить текст??
// очень крутой способ как вставить все что угодно в html
slider.innerHTML = '<h1>Hello world</h1>';
// или другой метод есть, но он хуже
// slider.textContent = 'Hello'; // тк работает только с текстом. Он вводит текст и только
//
//
// а как вставить кусочек кода перед или после определенныъх тегов?
// для этого у нас есть
//slider.insertHTML('--', '<h2>Hello</h2>');  // куда, что вставить
// варианты куда: beforebegin-прямо перед элементом(без вложенности), beforeend, afterbegin-в начало этого элемента(вкладывает в), afterend
//
//
// замечание! Если мы обращаемся через документ к обёртке, а потом еще раз через документ к тому что внутри этой обёртки, то это излишне
// можно один раз написать док.обертка, а потом использовать обертка.элемент




////////////////
// Обработка событий
//
const btn = document.querySelector('button'),
	  overlay = document.querySelector('.overlay');
// btn.onClick(function (){
// 	alert('Click');
// });                     //Увидишь такой код - это колхоз.
// Нужно переделать его под современную релаьность
//
//btn.onClick(function (){
// 	alert('Second click');
// });                         ///т.е. работает лишь последний вариант такого кода, забывая все предыдущие
//
// как надо?
// нам нужно уметь добавлять обработку событий и удалять, чтобы не терять функционал
// для этого используются эдИвентЛистенер и РемувИвентЛИстенер
btn.addEventListener('click', () => {
	console.log('click');
});
//
// теперь можно назначать сразу несколько действий на одно событие
//
//
// иногда нам нужно получить данные о том элементе с которым мы взаимодействуем
// как?
// для этого есть специальной объект Event / (е) и он передается как аргумент в callback-функцию
// даже если неск аргументов в функции то первым всегда будет event
// функционал объекта Event имеет встроенный return, который возвращает нам всю информацию о том объекте, что мы выбрали. Плюс можно обращаться к разным свойствам этого объекта

// btn.addEventListener('click', (e) => {
// 	e.target.style.backgroundColor = 'red';
// });

// для удаления события используется RemoveEventListener, но
// есть одна загвоздка: ему нужно назначать точно такую же функцию как и AddEnevtListener
// Равны ли два массива с одинаковыми элементами? Как мы помним, нет. Так и тут: одна и та же колбек функция не является таковой в двух разных местах

//const deleteEvent = (e) => {e.target.remove()};

// короче, можно так, вынося кусок кода в переменную. А можно просто еще раз прописать
// и будет так:

//btn.removeEventListener('click', deleteEvent);
// btn.removeEventListener('click', (e) => {
// 	e.target.style.backgroundColor = 'red';
// });

const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
//в чем же заклчается суть всплытия событий?
// когда есть родитель и дочерний элемент с одинаковой обработкой события, то 
// сначала обработка идет у дочки и затем у родителя, причем в консоли ссылка идет дважды на дочерний элементъ

// а если поменять e.target на e.currentTarget то увидем реальные элементы
//
// Итого, высплытие событий - это когда обработчик срабатывает на самом вложенном элементе, а затем на родителе и выше и выше

// у браузера есть стандартное поведение. Например, выделение текста, подсветка ссылок и тп
// мы можем это отменить и переназначить

const link = document.querySelector('a');
link.addEventListener('click', (event) =>{
	event.preventDefault(); // всегда сначала отменяем стандартное поведение
	// а дальше лепим свое че хотим


	console.log(event.target); // теперь мы не переходим по ссылке, а просто выводим ее в консоль

});

// если хочешь назначить один обработчки события на неск элементов, то цикл forEach в помощь


// базовый синтаксис AddEventListener включает 3 элемента
// (1-событие, 2-функцию и 3-опцию)
// есть опция once, которая явл альтернативой методу removeEventListener
//btn.addEventListener('click', deleteElement, {once: true});


// навигация по DOM
console.log(document.head);
console.log(document.body);  // Просто обращение к элементам

console.log(document.documentElement); //получение тега html и его содержимогоъ

//console.log(document.body.childNodes); //получает все узлы документа
//Узлы - это теги, переносы и скрипты
// Элементы же не включают переносы

console.log(document.body.firstChild);
console.log(document.body.lastChild);  // получение первого и последнего узлов

//чтобы работать ттолько с элементами существуют команды 
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('.slider').parentNode); 
//получить родительский узел

//console.log(document.querySelector('.slider__item').parentElement); 
//получить родительский элемент

//получение соседних узлов
console.log(document.querySelector('.slider').nextSibling);
console.log(document.querySelector('.slider').previousSibling);

//получение соседних элементов
console.log(document.querySelector('.slider').nextElementSibling);
console.log(document.querySelector('.slider').previousElementSibling);


console.log('-----');
for (let node of document.body.childNodes){
	if(node.nodeName == '#text'){
		continue;
		// кст, если в html добавить комментарии, то они тоже тут отобразятся тк не являются текстом
	}
	console.log(node);
};
// в каждом узле есть прототип с прописью всех свойств. Можно ознакомиться самому 

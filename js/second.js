// практика ч.4. Рефакторинг(переписывание под новые условия) персональной БД по фильмам
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	
	start: function (){
		personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', ''); 
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
		}
	},
	
	detectPersonalLevel: function(){
		if(personalMovieDB.count < 10){
			console.log('Мало');
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Классика');
		} else if(personalMovieDB.count >=30){
			console.log('Киноман');
		}else {
			console.log('Ошибка');
		}
	},

	rememberMyFilms: function(){
		for(let i = 1; i <= 3; i++){
		const a = prompt('Один из последних просмотренных фильмов', '');
	          b = prompt('На сколько его оцените?', '');
	    if (a != '' && b != '' && a.length < 50 && a.length != null) {
	   		personalMovieDB.movies[a] = b;    
	   		console.log('done');
	    	} else{
	     	alert('Error. Do it again');
	     	i--;
	    	}
		};
	},
	toggleVisibleMyDB: function(){
		if (personalMovieDB.privat) {
 			personalMovieDB.privat = false;
 		} else { personalMovieDB.privat = true;}
	},
	showMyDB: function (hidden){
		if (!hidden) {
		console.log(personalMovieDB);
		}
	},
	writeYourGenres: function() {
	for (let i = 0; i < 3; i++){
		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
	    if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${i+1}`, ''); 
		i--;}
		}
		personalMovieDB.genres.forEach( function(item, i) {
			console.log(`Любимый жанр ${i+1} - это ${item}`);
		});
	}
};


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
personalMovieDB.toggleVisibleMyDB();
console.log('---')
personalMovieDB.showMyDB(personalMovieDB.privat);


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










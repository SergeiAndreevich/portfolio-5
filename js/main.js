alert('hello world!');

var numberOfFilms = prompt('Сколько фильмов вы смотрели?', '');
alert(`Вау, целых ${numberOfFilms}`);

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);


let nameOfFilm = prompt('Один из последних просмотренных фильмов', '');
let rateOfFilm = prompt('На сколько его оцените?', '');
personalMovieDB.movies[nameOfFilm] = rateOfFilm;

console.log(personalMovieDB);

// добавить свойство в объект можно 2 путями
// через точку (аккуратно с кириллицей) movie.newProperty
//через []       movie[newProperty]

const a = prompt('Один из последних просмотренных фильмов', ''),
	  b = prompt('На сколько его оцените?', ''),
	  c = prompt('Один из последних просмотренных фильмов', ''),
	  d = prompt('На сколько его оцените?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


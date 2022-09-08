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
btn.addEventListener('click', myAnimation);


//------------ Технология Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

//так работает метод GET. Все основано на промисах
//мы сразу обращается к сервару по URL, 
//когда не прописываем метод - это GET
//и получаем респонс в виде json. Там уже есть встроенный метод
//и с помощью .json() парсим ответ сервера
//затем по технологии промиса выводим данные в консоль

//---

//а как запостить данные?

//---

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({name: 'Alex'}),
	headers: {
		'Content-type': 'application/json'
	}
})
  .then(response => response.json())
  .then(json => console.log(json));

  //для поста мы передаем объект в фетч
  //в объекте есть куча полей, но самые главные два
  //method - это те самые гет, пост, делит, пут и патч
  // и второй body - он содержит контент для поста
  //еще лучше всего указывать headers, чтобы как и в XHR сервер понимал с чем имеет дело


//===================================================================
//методы массивов
// filter, map, every, some, reduce 
	const obj = {
		ivan: 'person',
		lena: 'person',
		bobik: 'animal',
		cit: 'animal'
	};

// entries - превращает объект в матрицу
//здесь в массив массивов
	const newArr = Object.entries(obj)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);

	console.log(newArr); 
	


	

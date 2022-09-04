//создать div
const div = document.createElement('div');
//добавить ему класс
div.classList.add('wrapper');
//добавить в body
document.body.append(div);

console.log(div);

//создать заголовок Н1
//// const h1 = document.createTextNode(`<h1>DOM</h1>`);
//// div.before(h1);
//// такой метод не работает, он просто запихивает строку в html код
const h1 = document.createElement('h1');
h1.textContent ='DOM (Document Object Model)';
document.body.prepend(h1);
// вставить h1 перед wrapper 
// это лучше сделать через insertAdjacentElement
// div.insertAdjacentElement('beforebegin', h1);

//создать список из 3 элементов
//элементы для добавления можно писать через бэктики
//причем бэктики допускают переносы строк
const ul = `<ul>
	<li>Один</li>
	<li>Два</li>
	<li>Три</li>
</ul>` ;
////document.body.innerHTML = ul;
////это глупый способ добавить жлемент в html, тк он замещает код: стирает то что было и передает то, что мы вставляем
////document.body.div.innerHTML = ul; - такое не работает. Наш html не знает ничего еще о файлах, что мы из js в него добавили, поэтмоу мы не можем использовать их как свойства body
//но если внутри нету никакой разметки, то свойство innerHTML вполне себе сносно работает
div.innerHTML = ul;

//----------------------------------------------


//создать и добавить изображение
const img = document.createElement('img');
//добавить атрибуты class, src, width, alt
img.classList.add('super');
img.src = 'https://picsum.photos/240';
img.alt = 'Super Man';
img.width = 240;
console.log(img);

div.append(img); 

//----------------------------------------------


//создать два параграфа и поместить перед списком
const newElem = `<div class = 'pDiv'><p>Параграф 1</p><p>Параграф 2</p></div>`;
const ulList = div.querySelector('ul'); //оказывается div, который мы добавили из js уже видится. Но хз почему через body его вызвать не идается
console.log(document.body.div);  //выдает undefiened
ulList.insertAdjacentHTML('beforebegin',newElem);   //хочу заметить, что HTML а не Element, так как мы сохздали именно html код в бэктиках. А вот если бы через креэйнЭлемент, то там можно было бы инсертЭлемент

// добавить ко второму парааграфу класс Текст
////,,,,если не знаешь, как вызвать элемент, то обратись к родителю, потом к его потомкам и так постепенно находи путь к элементу
const pDiv = document.querySelector('.pDiv');
console.log(pDiv.children); //позволяет просмотреть потомков в виде коллекции
pDiv.children[1].classList.add('text');

//удалить первый параграф
// можно также ерез чилдрен, а потом ремув, а можно иначе
pDiv.firstElementChild.remove();

//-----------------------------------------------

//создать функцию generateAutoCard с аргументами brand, color, year
const createCard = (brand, color, year) => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return `
				<div class = 'autoCard'>
					<h2>${brand} ${year}</h2>
					<p>Автомобиль ${brand} - ${year} года выпуска. Возраст авто: ${currentYear-year}.Цвет ${color}</p>
					<button class='btn' type='button'>Delete</button>
				</div>
    `
};

//создать div с классом autos
const autos = document.createElement('div');
autos.classList.add('autos');

console.log(autos);

const carsList = [
	{brand: 'tesla', color: 'white', year: 2017},
	{brand: 'lexus', color: 'black', year: 2015},
	{brand: 'audi', color: 'blue', year: 2020},
];
const carsHTML = carsList.map(car =>{
	return createCard(car.brand, car.color, car.year);
}).join('');
//Метод arr.map вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

autos.innerHTML = carsHTML;
const placeForAuto = document.querySelector('.wrapper');
//placeForAuto.insertAdjacentHTML('beforebegin', autos);
//div.before(placeForAuto);
// console.log('----');
// console.log(placeForAuto);
// console.log(autos)
////... почему то не хочет вставляться как разметки


//.....document.body.prepend(autos); // а вот так прям сразу встало на место
const newAttempt = document.querySelector('h1');
//h1.insertAdjacentHTML('afterend', autos);  //
////[object HTMLDivElement]
//// снова выводит вот такую хуйню. В чем проблема?
//newAttempt.insertAdjacentHTML( 'beforebegin',autos);
//и снова облом

//---------------------------------------------------------


document.body.prepend(autos);
//добавить в каждую карточку кнопку "удалить" и по клику удалять карточку
const cardDelete = document.querySelectorAll('.btn');
cardDelete.forEach(item => {
	item.addEventListener('click', () => {
		const itemParent = item.parentElement;
		itemParent.remove();
	});
});

//parentElement и parentNode - это поиск родителя
// а вот sibling - это получение реально соседнего элемента или узла, next или previous

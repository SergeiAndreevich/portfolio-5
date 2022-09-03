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
img.src = 'www';
img.alt = 'qeqwe';
img.width = 240;
console.log(img);

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBG = document.querySelector('.promo__bg'),
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      {movies} = movieDB;

promo.forEach(element => element.remove());

promoGenre.textContent = 'драма';

promoBG.style.backgroundImage = 'url("img/bg.jpg")';

promoInteractiveList.innerHTML = '';

movies.sort();
movies.forEach( (film, index) => {
    promoInteractiveList.innerHTML += `
<li class="promo__interactive-item">${index + 1}. ${film}
    <div class="delete"></div>
</li>`;
});






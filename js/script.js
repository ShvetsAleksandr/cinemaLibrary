'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    
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
        addForm = document.querySelector('.add'),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        input = document.querySelector('.adding__input'),
        {movies} = movieDB;
    
    const promoClear = (promo) => {
        promo.forEach(element => element.remove());
    };

    const changesOnPage = () => {
        promoGenre.textContent = 'драма';
        promoBG.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const movieSort = (arr) => arr.sort();

    const addFilmsOnPage = (movies, list) => {
        list.innerHTML = '';

        movieSort(movies);
        movies.forEach( (film, index) => {
            list.innerHTML += `
        <li class="promo__interactive-item">${index + 1}. ${film}
            <div class="delete"></div>
        </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                btn.parentElement.remove();
                movies.splice(index, 1);
                addFilmsOnPage(movies, list);
            });
        });
    };

    const inputFilms = (form, input) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let filmName = input.value;

            if (filmName && filmName.trim() !== '') {
                if (filmName.length > 21) {
                    filmName = filmName.slice(0, 21) + '...';
                }
        
                movieDB.movies.push(filmName);
                if (checkbox.checked) {
                    console.log("Добавлен любимый фильм. ");
                }

                e.target.reset();

                addFilmsOnPage(movies, promoInteractiveList);
            }
        });
    };

    promoClear(promo);
    changesOnPage();
    addFilmsOnPage(movies, promoInteractiveList);
    inputFilms(addForm, input);
});







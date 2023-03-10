import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const button = document.querySelector(trigger);

    // // Добавим анимацию к каждой карточке
    // cards.forEach( card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // // Меняем классы, для их отображения на странице
    // button.addEventListener('click', () => {
    //     cards.forEach( card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //         // Удалить кнопку после срабатывания
    //     button.remove();
    // });

    button.addEventListener('click', function () {
        getResource('assets/db.json')
        .then (res => createCards(res.styles))
        .catch(error => dropError(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach( ( {src, title, link} )  => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="style">
                    <h4>"${title}"</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

    function dropError (reason) {
        let error = document.createElement('div');
        error.classList.add('status');
        error.innerHTML = `<div>Возникла непредвиденная ошибка: ${reason}</div>`
        document.querySelector(wrapper).appendChild(error);
        
    }

};

export default showMoreStyles;
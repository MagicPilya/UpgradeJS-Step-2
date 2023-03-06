const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          button = document.querySelector(trigger);

    // Добавим анимацию к каждой карточке
    cards.forEach( card => {
        card.classList.add('animated', 'fadeInUp');
    });

    // Меняем классы, для их отображения на странице
    button.addEventListener('click', () => {
        cards.forEach( card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
            // Удалить кнопку после срабатывания
        button.remove();
    });

};

export default showMoreStyles;
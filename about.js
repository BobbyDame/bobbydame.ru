document.addEventListener("DOMContentLoaded", function() {
    const fullWidthBlock = document.querySelector('.full-width-block');

    // Функция для проверки видимости элемента
    function checkVisibility() {
        const rect = fullWidthBlock.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Если элемент виден на экране
        if (rect.top < windowHeight && rect.bottom > 0) {
            fullWidthBlock.classList.add('visible'); // Добавляем класс для анимации
            window.removeEventListener('scroll', checkVisibility); // Убираем обработчик после активации
        }
    }

    // Проверяем видимость при загрузке страницы и прокрутке
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});


document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.place-text-container');
    const imgContainer = document.querySelector('.place-img');

    // Функция для проверки видимости элемента
    function checkVisibility() {
        const textRect = textContainer.getBoundingClientRect();
        const imgRect = imgContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Если текстовый блок виден на экране
        if (textRect.top < windowHeight && textRect.bottom > 0) {
            textContainer.classList.add('visible'); // Добавляем класс для анимации
        }

        // Если изображение видимо на экране
        if (imgRect.top < windowHeight && imgRect.bottom > 0) {
            imgContainer.classList.add('visible'); // Добавляем класс для анимации
        }
    }

    // Проверяем видимость при загрузке страницы и прокрутке
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.group-container');

    // Функция для проверки видимости элемента
    function checkVisibility() {
        const windowHeight = window.innerHeight;

        containers.forEach(container => {
            const rect = container.getBoundingClientRect();

            // Если блок виден на экране
            if (rect.top < windowHeight && rect.bottom > 0) {
                container.classList.add('visible'); // Добавляем класс для анимации
            }
        });
    }

    // Проверяем видимость при загрузке страницы и прокрутке
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    const lineContainer = document.querySelector('.vertical-line-container');
    const line = document.querySelector('.vertical-line');

    // Функция для проверки видимости элемента
    function checkVisibility() {
        const rect = lineContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Если блок виден на экране
        if (rect.top < windowHeight && rect.bottom > 0) {
            line.classList.add('visible'); // Добавляем класс для анимации
        }
    }

    // Проверяем видимость при загрузке страницы и прокрутке
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});
var modal = document.getElementById("modal");
var closeButton = document.getElementsByClassName("close")[0]; // Получаем кнопку закрытия

// Получаем все блоки товара
var tovars = document.querySelectorAll(".tovar");

// Обходим каждый блок товара и добавляем обработчик события
tovars.forEach(function(tovar) {
    tovar.addEventListener("click", function() {
        // Извлекаем информацию о товаре
        var title = tovar.querySelector('h1').innerText;
        var description = tovar.dataset.description; // Получаем подробное описание из data-атрибута
        var price = tovar.querySelector('b').innerText;
        var imageUrl = tovar.dataset.image; // Получаем URL изображения из data-атрибута

        // Заполняем модальное окно данными товара
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        document.getElementById("modal-price").innerText = price;
        document.getElementById("modal-image").src = imageUrl; // Устанавливаем изображение

        // Открываем модальное окно
        modal.style.display = "block";
        document.body.classList.add("modal-open"); // Добавляем класс для отключения прокрутки страницы
    });
});

// Закрываем модальное окно при клике на "x"
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Убираем класс для включения прокрутки страницы
});

// Закрываем модальное окно при клике вне его
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Убираем класс для включения прокрутки страницы
    }
});
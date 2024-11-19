// Найдем кнопку для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle');

// Добавим событие клика
themeToggleBtn.addEventListener('click', function () {
    // Переключаем класс dark-mode на body
    document.body.classList.toggle('dark-mode');

    // Меняем текст кнопки в зависимости от текущего режима
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

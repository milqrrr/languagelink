// Функция для обновления даты и времени
// Функция для установки текущей даты
function updateDateTime() {
    const datetime = document.getElementById("datetime");
    const now = new Date();
    datetime.textContent = now.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}



// Обновление даты и времени каждую секунду
setInterval(updateDateTime, 1000);
updateDateTime();
// Найдем кнопку для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle');

// Добавим событие клика
themeToggleBtn.addEventListener('click', function() {
    // Переключаем класс dark-mode на body
    document.body.classList.toggle('dark-mode');
    
    // Переключаем класс для других важных контейнеров
    document.querySelectorAll('header, footer, nav, section, .card, .container, blockquote').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    // Меняем текст кнопки в зависимости от текущего режима
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});





// Звездный рейтинг
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            s.style.color = i <= index ? '#FFD700' : '#000';
        });
    });
});

// Обработчик событий при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const userInfoSection = document.getElementById('user-info');
    const userNameDisplay = document.getElementById('user-name-display');
    const logoutBtn = document.getElementById('logout-btn');
    const loginSection = document.getElementById('login-section');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Проверка сохранённого пользователя
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        showUserInfo(storedUser);
    }

    // Проверка сохранённой темы
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.body.classList.add(storedTheme);
        updateThemeButtonText(storedTheme);
    }

    // Обработчик формы входа
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = usernameInput.value;
        if (username) {
            localStorage.setItem('user', username);
            showUserInfo(username);
        }
    });

    // Обработчик кнопки выхода
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('user');
        showLoginForm();
    });

    // Функция для отображения информации о пользователе
    function showUserInfo(username) {
        userNameDisplay.textContent = username;
        userInfoSection.style.display = 'block';
        loginSection.style.display = 'none';
    }

    // Функция для отображения формы входа
    function showLoginForm() {
        userInfoSection.style.display = 'none';
        loginSection.style.display = 'block';
    }
    });
// Найдем звезды и добавим клик-обработчик
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        alert('Вы поставили оценку: ' + rating);

        // Воспроизвести звук
        const audio = new Audio('noice.mp3');
        audio.play();
    });
});

// Получаем элементы
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Проверяем сохранённую тему в LocalStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeButtonText(savedTheme);
}

// Слушатель для смены темы
themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        // Переключаем на светлую тему
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
        updateThemeButtonText("light-theme");
    } else {
        // Переключаем на тёмную тему
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme");
        updateThemeButtonText("dark-theme");
    }
});

// Обновление текста кнопки
function updateThemeButtonText(theme) {
    themeToggleButton.textContent = theme === "dark-theme" ? "🌞 Light Mode" : "🌙 Dark Mode";
}

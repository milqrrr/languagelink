// Валидация формы
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Остановить отправку формы

    const name = document.getElementById("name").value;
    const level = document.getElementById("level").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const tgNick = document.getElementById("tg_nick").value;
    const errorDiv = document.getElementById("error");

    errorDiv.innerHTML = ""; // Очистка предыдущих ошибок

    // Проверка на заполненность всех полей
    if (name === "" || level === "" || message === "" || phone === "" || email === "" || tgNick === "") {
        errorDiv.innerHTML = "<p style='color: red;'>Пожалуйста, заполните все поля.</p>";
    } else {
        // Здесь можно добавить код для отправки данных на сервер
        alert("Спасибо за ваше сообщение, " + name + "!");
        document.getElementById("popup").style.display = "none"; // Закрыть всплывающее окно после отправки
    }
});

// Открытие и закрытие всплывающего окна
document.getElementById("openPopup").onclick = function() {
    document.getElementById("popup").style.display = "flex"; // Открыть всплывающее окно
};

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = "none"; // Закрыть всплывающее окно
};

// Функция для показа/скрытия ответов на вопросы
document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Очистка формы
document.getElementById("clearForm").onclick = function() {
    document.getElementById("contactForm").reset(); // Очищаем поля формы
    document.getElementById("error").innerHTML = ""; // Очищаем сообщения об ошибках
};

// Переход по шагам формы
let currentStep = 1;

document.getElementById("nextStep").onclick = function() {
    if (currentStep === 1) {
        document.getElementById("step1").style.display = "none"; // Скрываем первый шаг
        document.getElementById("step2").style.display = "block"; // Показываем второй шаг
        currentStep = 2;
    }
};

document.getElementById("prevStep").onclick = function() {
    if (currentStep === 2) {
        document.getElementById("step2").style.display = "none"; // Скрываем второй шаг
        document.getElementById("step1").style.display = "block"; // Показываем первый шаг
        currentStep = 1;
    }
};

// Показать/скрыть FAQ для взрослых и детей
document.getElementById("adultsButton").onclick = function() {
    document.getElementById("faqContainer").style.display = "block"; // Показать контейнер FAQ
    document.getElementById("adultsFAQs").style.display = "block"; // Показать FAQ для взрослых
    document.getElementById("kidsFAQs").style.display = "none"; // Скрыть FAQ для детей
};

document.getElementById("kidsButton").onclick = function() {
    document.getElementById("faqContainer").style.display = "block"; // Показать контейнер FAQ
    document.getElementById("adultsFAQs").style.display = "none"; // Скрыть FAQ для взрослых
    document.getElementById("kidsFAQs").style.display = "block"; // Показать FAQ для детей
};
// Звуковые эффекты
const adultSound = new Audio('adult-sound.mp3');  // Путь к звуку для кнопки "Взрослым"
const childrenSound = new Audio('children-sound.mp3');  // Путь к звуку для кнопки "Детям"

// Массив часто задаваемых вопросов
const faqData = {
    adults: [
        { question: "Как проходят занятия для взрослых?", answer: "У нас есть программа специально для взрослых, чтобы учиться в удобное время." },
        { question: "Есть ли онлайн-курсы для взрослых?", answer: "Да, вы можете пройти курс как очно, так и онлайн." }
    ],
    children: [
        { question: "С какого возраста можно начать?", answer: "Занятия доступны для детей с 5 лет." },
        { question: "Как проходит обучение для детей?", answer: "Обучение проходит в игровой форме для наилучшего восприятия." }
    ]
};

// Функция отображения часто задаваемых вопросов на основе категории
function displayFAQ(category) {
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = ''; // Очищаем контейнер

    faqData[category].forEach(item => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");
        
        const question = document.createElement("h3");
        question.classList.add("question");
        question.textContent = item.question;

        const answer = document.createElement("div");
        answer.classList.add("answer");
        answer.textContent = item.answer;

        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        faqContainer.appendChild(faqItem);

        // Скрытие/показ ответа
        question.addEventListener("click", () => {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
}

// Обработчики для кнопок "Взрослым" и "Детям"
document.getElementById("adultBtn").addEventListener("click", () => {
    adultSound.play();  // Воспроизведение звука
    displayFAQ("adults");
});

document.getElementById("childrenBtn").addEventListener("click", () => {
    childrenSound.play();  // Воспроизведение звука
    displayFAQ("children");
});

// Анимация для открытия и закрытия формы
document.getElementById("openPopup").onclick = function() {
    document.getElementById("popup").style.display = "flex";
};

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Валидация и очистка формы обратной связи
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const level = document.getElementById("level").value;
    const message = document.getElementById("message").value;
    const errorDiv = document.getElementById("error");

    errorDiv.innerHTML = ""; 

    if (name === "" || level === "" || message === "") {
        errorDiv.innerHTML = "<p style='color: red;'>Пожалуйста, заполните все поля.</p>";
    } else {
        alert("Спасибо за ваше сообщение, " + name + "!");
        document.getElementById("popup").style.display = "none";
    }
});

document.getElementById("clearFormBtn").addEventListener("click", function() {
    document.getElementById("contactForm").reset();  // Очищение формы
});
const sound = new Audio('Audio/noice.mp3');
document.getElementById("playSoundButton").addEventListener("click", () => {
    sound.play();
});
// Найдём кнопку для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle');

// Функция для переключения между тёмным и светлым режимами
function toggleTheme() {
    // Переключаем класс на <body> для изменения фона и текста
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    }
}

// Добавим событие клика на кнопку
themeToggleBtn.addEventListener('click', toggleTheme);

// Если у тебя есть форма или попапы, у них фон тоже должен изменяться
const popup = document.getElementById('popup');
if (popup) {
    popup.style.backgroundColor = 'inherit'; // чтобы фон изменялся согласно теме
}
// Функция для переключения между тёмным и светлым режимами
function toggleTheme() {
    // Добавляем анимацию к кнопке
    themeToggleBtn.classList.add('animate__animated', 'animate__pulse');

    // Переключаем класс на <body> для изменения фона и текста
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    }

    // Удаляем класс анимации после завершения анимации (чтобы не зацикливать)
    setTimeout(() => {
        themeToggleBtn.classList.remove('animate__animated', 'animate__pulse');
    }, 1000); // Убираем анимацию через 1 секунду
}








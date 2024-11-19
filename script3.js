// Массив студентов
const students = [
    {
        name: "Milana Azamatovna",
        phone: "+7 (777) 123-4567",
        photo: "images/myphoto.jpg",
        feedback: "Это лучший курс, который я посещала!"
    },
    {
        name: "Maxatova Alua",
        phone: "",
        photo: "images/alua.jpg",
        feedback: "Этот курс английского языка значительно улучшил мои навыки общения. Спасибо за потрясающие занятия!"
    },
    {
        name: "KOLYA",
        phone: "",
        photo: "images/kolya.jpg",
        feedback: "Я наконец-то чувствую себя уверенно, говоря на английском. Это лучший курс, который я посещала!"
    },
    {
        name: "Alina Muldagalieva",
        phone: "",
        photo: "images/alina.jpg",
        feedback: "Методика преподавания на высшем уровне, теперь я понимаю все нюансы грамматики. Рекомендую!"
    },
    {
        name: "Марлен",
        phone: "",
        photo: "images/marlen.jpg", 
        feedback: "Этот курс помог мне улучшить мои разговорные навыки!"
    },
    {
        name: "Коля",
        phone: "",
        photo: "images/kolya.jpg", 
        feedback: "Я наконец-то чувствую себя уверенно на уроках!"
    },
    {
        name: "Дархан",
        phone: "",
        photo: "images/darkhan.jpg", 
        feedback: "Курс действительно интересный и полезный!"
    },
    {
        name: "Диас",
        phone: "",
        photo: "images/dias.jpg", 
        feedback: "Мне очень нравится, как нас обучают!"
    },
    {
        name: "Баглан",
        phone: "",
        photo: "images/baglan.jpg", 
        feedback: "Отличный курс, рекомендую всем!"
    }
];

// Функция для отображения студентов
function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = ""; // Очистка списка перед добавлением

    students.forEach(student => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4"; // Используем Bootstrap для колонок

        col.innerHTML = `
            <div class="student-card">
                <div class="d-flex align-items-center">
                    <img src="${student.photo}" alt="${student.name}" class="student-photo" style="width: 100px; height: 100px; border-radius: 50%;">
                    <div class="ms-3">
                        <h3>${student.name}</h3>
                        ${student.phone ? `<p>Телефон: ${student.phone}</p>` : ''}
                        <p>"${student.feedback}"</p>
                        <a href="#" class="btn btn-primary mt-2">Подробнее</a>
                    </div>
                </div>
            </div>
        `;

        studentList.appendChild(col);
    });
}

// Вызов функции для отображения студентов
displayStudents();
// Найдем кнопку для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle');

// Добавим событие клика
themeToggleBtn.addEventListener('click', function() {
    // Переключаем класс dark-mode на body
    document.body.classList.toggle('dark-mode');
    
    // Переключаем класс для других элементов, включая секции, контейнеры и навигацию
    document.querySelectorAll('header, footer, nav, main, section, .container').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    // Меняем текст кнопки в зависимости от текущего режима
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});
// Найдем кнопку для переключения темы
 themeToggleBtn = document.getElementById('theme-toggle');

// Добавим событие клика
themeToggleBtn.addEventListener('click', function() {
    // Переключаем класс dark-mode на body
    document.body.classList.toggle('dark-mode');
    
    // Переключаем класс для ссылок и других элементов, если нужно
    document.querySelectorAll('a').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    // Меняем текст кнопки в зависимости от текущего режима
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});



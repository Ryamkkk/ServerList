// Получаем элемент прогресс бара
const progressBar = document.querySelector('.progress-bar');

// Получаем кнопку, которая будет запускать изменение прогресса
const startButton = document.querySelector('#startButton');

// Функция для обновления прогресс бара
function updateProgressBar(value) {
  progressBar.style.width = `${value}%`;
  progressBar.setAttribute('aria-valuenow', value);

  if (value < 30) {
    progressBar.classList.remove('bg-success', 'bg-warning');
    progressBar.classList.add('bg-danger');
  } else if (value < 70) {
    progressBar.classList.remove('bg-success', 'bg-danger');
    progressBar.classList.add('bg-warning');
  } else {
    progressBar.classList.remove('bg-warning', 'bg-danger');
    progressBar.classList.add('bg-success');
  }
}

// Функция для запуска изменения прогресса
function startProgressChange() {
  let value = 0; // начальное значение прогресса

  const interval = setInterval(() => {
    if (value <= 100) {
      updateProgressBar(value);
      value += 10; // увеличиваем значение прогресса
    } else {
      clearInterval(interval); // останавливаем интервал после достижения 100%
    }
  }, 1000); // интервал в миллисекундах (здесь 1000 мс = 1 секунда)
}

// Событие нажатия на кнопку
startButton.addEventListener('click', startProgressChange);

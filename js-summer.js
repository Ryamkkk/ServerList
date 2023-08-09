// Получаем элемент прогресс бара
const progressBar = document.querySelector('.progress-bar');

// Получаем кнопку, которая будет запускать изменение прогресса
const startButton = document.querySelector('#startButton');

// Функция для обновления прогресс бара
function updateProgressBar(value) {
  progressBar.setAttribute('aria-valuenow', value);
  progressBar.style.width = `${value}%`;
}

// Событие нажатия на кнопку
startButton.addEventListener('click', () => {
  let progressValue = 0; // начальное значение прогресса

  const interval = setInterval(() => {
    if (progressValue < 100) {
      progressValue += 10; // увеличиваем значение на 10 (может быть другой шаг)
      updateProgressBar(progressValue);
    } else {
      clearInterval(interval); // останавливаем интервал, когда достигли 100%
    }
  }, 1000); // интервал в миллисекундах (здесь 1000 мс = 1 секунда)
});

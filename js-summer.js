// Получаем элемент прогресс бара
const progressBar = document.querySelector('.progress');

// Пример значения, которое приходит в запросе (ваша логика может быть другой)
const progressValue = 50; // Здесь 50 - это просто пример значения

// Обновляем значение атрибута "aria-valuenow" для прогресс бара
progressBar.setAttribute('aria-valuenow', progressValue);

// Обновляем ширину прогресс бара на основе полученного значения
progressBar.style.width = `${progressValue}%`;

// Если необходимо, можно также обновить текст внутри прогресс бара
// progressBar.textContent = `${progressValue}%`;

// Меняем классы прогресс бара в зависимости от значения (это просто пример)
if (progressValue < 30) {
  progressBar.classList.remove('bg-success', 'bg-warning');
  progressBar.classList.add('bg-danger');
} else if (progressValue < 70) {
  progressBar.classList.remove('bg-success', 'bg-danger');
  progressBar.classList.add('bg-warning');
} else {
  progressBar.classList.remove('bg-warning', 'bg-danger');
  progressBar.classList.add('bg-success');
}

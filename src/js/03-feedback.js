// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

import throttle from 'lodash.throttle';

const mainForm = document.querySelector('.feedback-form');

const feedbackForm = 'feedback-form-state';

const formData = {};

mainForm.addEventListener('input', throttle(onInputData, 1000));

mainForm.addEventListener('submit', onSubmitData);

loadSavedData();

function onInputData(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
}

function onSubmitData(e) {
  e.preventDefault();
  console.log(e.currentTarget);
  localStorage.setItem(feedbackForm, JSON.stringify(formData));
}

function loadSavedData() {
  const data = localStorage.getItem(feedbackForm);

  if (data) {
    console.log(data);
  }
}

console.log(mainForm.elements);

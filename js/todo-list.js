'use strict';

const getUserString = (question) =>  prompt(question);

const isNotEmpty = (text) => !!text.trim();

const createItem = (text) => {
  const item = document.createElement('li');
  item.className = 'todo__item';
  item.textContent = text;
  return item;
};

const addItem = (todoList, item) => {
  todoList.append(item);
};

const deleteLastItem = (todoList) => {
  todoList.lastElementChild?.remove();
};

const clearItems = (todoList) => {
  todoList.innerHTML = '';
};

const generateToDoList = (message) => {
  const DELETE = 'del';
  const CLEAR = 'clear';
  const EXIT = 'exit';

  const question = message || 'Что вы хотите сделать?';
  const userString = getUserString(question);
  const todoList = document.querySelector('.todo__list');

  switch (userString) {
    case DELETE:
      deleteLastItem(todoList);

      message = 'Последний элемент удален. Что-то еще?'
      return generateToDoList(message);

    case CLEAR:
      clearItems(todoList);

      message = 'Список пуст. Что-то еще?';
      return generateToDoList(message);

    case EXIT:
    case null:
      return;

    default:
      if (isNotEmpty(userString)) {
        const item = createItem(userString);
        addItem(todoList, item);

        message = 'Элемент добавлен. Что-то еще?';
        return generateToDoList(message);
      }

      message = 'Введите, что вы хотите сделать!';
      return generateToDoList(message);
  }
};

generateToDoList();

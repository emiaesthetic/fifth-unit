'use strict';

// Восстановление правильного порядка книг
const misplacementBookIndexes = [4, 1, 2, 3, 5, 6];
const allItemBooks = document.querySelectorAll('.item');

const books = {};
misplacementBookIndexes.forEach(
    (item, index) => (books[item] = allItemBooks[index]),
);

const booksList = document.querySelector('.items');
booksList.append(...Object.values(books));

// Исправление глав в книгах
const prefixes = ['one', 'two', 'three', 'four', 'five', 'six'];

const booksContent = [];
prefixes.forEach((prefixBook) => {
  const content = document.querySelector(`.item--${prefixBook} .content`);
  booksContent.push(content);
});

const getChaptersBook = (prefixBook) =>
  document.querySelectorAll(`.props__item--${prefixBook}`);

const getChapterNumberOrLetter = (text) => {
  const secondItem = text.split(' ')[1];
  return parseInt(secondItem) || secondItem;
};

prefixes.forEach((prefixBook, index) => {
  const chaptersBook = [...getChaptersBook(prefixBook)];

  chaptersBook.sort((a, b) => {
    a = getChapterNumberOrLetter(a.textContent);
    b = getChapterNumberOrLetter(b.textContent);
    return (a - b) || a.localeCompare(b);
  });

  booksContent[index].append(...chaptersBook);
});

// Удаление рекламы
const advertising = document.querySelector('.ads');
advertising.remove();

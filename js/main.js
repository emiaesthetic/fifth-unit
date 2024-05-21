'use strict';

const fixLayout = () => {
  const getBook = (prefixBook) =>
    document.querySelector(`.item--${prefixBook}`);

  const getChaptersBook = (prefixBook) =>
    document.querySelectorAll(`.props__item--${prefixBook}`);

  const getNumberOrLetter = (text) => {
    const secondItem = text.split(' ')[1];
    return parseInt(secondItem) || secondItem[0];
  };

  const booksList = document.querySelector('.items');
  const prefixes = ['one', 'two', 'three', 'four', 'five', 'six'];

  prefixes.forEach((prefix) => {
    const book = getBook(prefix);
    const contentBook = book.querySelector('.content');

    const chaptersBook = [...getChaptersBook(prefix)];
    chaptersBook.sort((a, b) => {
      a = getNumberOrLetter(a.textContent);
      b = getNumberOrLetter(b.textContent);
      return a - b || String(a).localeCompare(b);
    });

    contentBook.append(...chaptersBook);
    booksList.append(book);
  });

  const advertising = document.querySelector('.ads');
  advertising.remove();
};

fixLayout();

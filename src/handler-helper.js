const filterBooksByName = (books, name) => {
  const lowerCasedName = name.toLowerCase();
  const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(lowerCasedName));
  return filteredBooks;
};

const filterBooksByIsReading = (books, reading) => {
  if (reading === '1') {
    return books.filter((book) => book.reading === true);
  }
  return books.filter((book) => book.reading === false);
};

const filterBooksByIsFinished = (books, finished) => {
  if (finished === '1') {
    return books.filter((book) => book.finished === true);
  }
  return books.filter((book) => book.finished === false);
};

const displayedBooks = (books) => {
  const bookList = books.map((book) => {
    const {
      id, name, publisher,
    } = book;
    return {
      id,
      name,
      publisher,
    };
  });

  return bookList;
};

export {
  filterBooksByName, filterBooksByIsReading, filterBooksByIsFinished, displayedBooks,
};

import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Hate Kolome JavaScript", author: "Zunayed Ahmed" },
    { id: 2, title: "Recharge Your Down Battery", author: "Jhankar Mahbub" },
    { id: 3, title: "Programming Bolod To Boss", author: "Jhankar Mahbub" },
    { id: 4, title: "Computer Programming", author: "Tamim Sahrier Subim" },
    { id: 5, title: "Python Deep Learning", author: "Rokibul Islam" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExists = state.books.filter((book) => book.id === id);
      if (isBookExists) {
        isBookExists[0].title = title;
        isBookExists[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;

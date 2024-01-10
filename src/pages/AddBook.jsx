import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/bookSlice/BookSlice";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const numberOfBooks = useSelector((state) => state.bookReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBook(book));
    toast.success("Book Added Successfully!");
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="w-full justify-center flex flex-col items-center">
      <h3 className="text-3xl font-bold uppercase text-center pb-5">
        Add Book
      </h3>
      <div className="flex p-10 rounded-md items-center justify-center bg-white w-2/5 ">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title" className="font-bold text-gray-600">
              Title:-
            </label>
            <input
              className="border border-gray-600 w-full p-1 rounded-md outline-none my-2"
              type="text"
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="author" className="font-bold text-gray-600">
              Author:-
            </label>
            <input
              className="border border-gray-600 w-full p-1 rounded-md outline-none my-2"
              type="text"
              name="author"
              id="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-black py-1 rounded-md text-white uppercase font-semibold my-1 border-2 border-black hover:bg-transparent   hover:text-black transition-all"
            type="submit"
          >
            Add Book
          </button>
          <Toaster position="bottom-right" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
};

export default AddBook;

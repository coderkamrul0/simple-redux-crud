import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBook } from "../redux/bookSlice/BookSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    toast.success("Book Update Successfully!");
  };

  return (
    <div className="w-full justify-center flex flex-col items-center">
      <h3 className="text-3xl font-bold uppercase text-center pb-5">
        Edit Book
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
            Update Book
          </button>
          <Toaster position="bottom-right" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
};

export default EditBook;

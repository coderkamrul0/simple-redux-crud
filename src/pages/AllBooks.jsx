import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteBook } from "../redux/bookSlice/BookSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    toast.success("Book Deleted Successfully!");
  };

  return (
    <div>
      <h3 className="text-3xl font-bold uppercase text-center pb-5">
        All Books
      </h3>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          {books.length === 0 ? (
            <p className="text-center text-gray-600 py-4">
              No books available.
            </p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Author
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => {
                  const { id, title, author } = book;
                  return (
                    <tr key={book.id} className="bg-white border-b">
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{title}</td>
                      <td className="py-4 px-6">{author}</td>
                      <td className="py-4 px-6 flex items-center gap-2">
                        <Link to="/edit-book" state={{ id, title, author }}>
                          <button>
                            <AiFillEdit className="w-6 h-6 hover:text-red-500" />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(id);
                          }}
                        >
                          <AiFillDelete className="w-6 h-6 hover:text-red-500" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default AllBooks;

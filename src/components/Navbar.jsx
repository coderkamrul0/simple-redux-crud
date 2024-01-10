import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full border-b-2 text-white flex gap-4 justify-center py-5">
      
      <Link
        to={"/"}
        className={`${
          location.pathname === "/"
            ? "font-bold text-white"
            : "text-gray-700 hover:text-white font-bold hover:text-shadow"
        }`}
      >
        All Books
      </Link>
      <Link
        to={"/add-book"}
        className={`${
          location.pathname === "/add-book"
            ? "font-bold text-white"
            : "text-gray-700 hover:text-white font-bold hover:text-shadow"
        }`}
      >
        Add Book
      </Link>
    </nav>
  );
};

export default Navbar;

/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded bg-transparent border-2 border-black px-5 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

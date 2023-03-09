import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-stone-200">
      <div className="mx-auto max-w-screen-xl py-4 px-5 text-2xl font-bold lg:py-7 lg:text-3xl">
        <Link className="w-fit cursor-pointer" to={`/`}>
          Jumantara.
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

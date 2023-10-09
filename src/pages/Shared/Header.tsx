import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-black shadow-xl">
      <div className="max-w-7xl mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className=" normal-case text-2xl font-bold text-white">
            Movies
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/watch-list" className="btn btn-sm rounded-sm">
            Watch List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

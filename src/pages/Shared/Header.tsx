import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/slice/themeSlice";
const Header = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const themeFromLocalStorage = localStorage.getItem("theme");
  const initialTheme = themeFromLocalStorage || currentTheme;
  document.querySelector("html")?.setAttribute("data-theme", initialTheme);

  return (
    <div className=" bg-black shadow-xl ">
      <div className="max-w-7xl mx-auto navbar">
        <div className="flex-1">
          <Link to="/" className=" normal-case text-2xl font-bold text-white">
            Movies
          </Link>
        </div>
        <div className="flex-none">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="text-white mr-4"
          >
            {currentTheme === "light" ? (
              <BsFillSunFill size={22} title="Switch to Dark" />
            ) : (
              <BsFillMoonFill size={20} title="Switch to Light" />
            )}
          </button>
          <Link
            to="/watch-list"
            className="btn btn-sm rounded-sm dark:bg-gray-300 dark:text-white"
          >
            Watch List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

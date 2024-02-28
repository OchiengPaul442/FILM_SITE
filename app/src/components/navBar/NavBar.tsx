import { useMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '/images/logo.jpg';

const NavBar = () => {
  const matchRoot = useMatch('/');
  const matchCourses = useMatch('/courses');
  const match = matchRoot || matchCourses;
  return (
    <nav className="bg-transparent relative mx-auto p-2 mt-0 w-full">
      <div className="container relative mx-auto flex flex-wrap items-center justify-around">
        <div className="font-extrabold">
          <NavLink
            to="/"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            <img
              src={logo}
              alt="Brand Logo"
              className="h-12 w-12 rounded-full"
            />
          </NavLink>
        </div>
        <div className="flex pt-2 justify-start w-[60%]">
          <ul className="list-reset flex justify-between flex-1 gap-x-20 md:flex-none items-center">
            <li className="mr-3">
              <NavLink
                to="/film"
                className={({ isActive }) =>
                  isActive
                    ? 'inline-block py-2 px-4 text-white no-underline border-b-2 border-red-500'
                    : 'inline-block py-2 px-4 text-white no-underline border-b-2 border-transparent'
                }
              >
                Film
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/"
                className={
                  match
                    ? 'inline-block py-2 px-4 text-white no-underline border-b-2 border-red-500'
                    : 'inline-block py-2 px-4 text-white no-underline border-b-2 border-transparent'
                }
              >
                MNFAPAC
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive
                    ? 'inline-block py-2 px-4 text-white no-underline border-b-2 border-red-500'
                    : 'inline-block py-2 px-4 text-white no-underline border-b-2 border-transparent'
                }
              >
                Music
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive
                    ? 'inline-block py-2 px-4 text-white no-underline border-b-2 border-red-500'
                    : 'inline-block py-2 px-4 text-white no-underline border-b-2 border-transparent'
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

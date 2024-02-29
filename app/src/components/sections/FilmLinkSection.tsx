import { Link } from 'react-router-dom';
import Arrow_Down_Right_LG from '/icons/MNFAPAC/Arrow_Down_Right_LG.png';

const FilmLinkSection = () => {
  return (
    <div className="bg-[#8D0303] w-full  p-10 flex items-center">
      <Link to="/films" className="w-full text-white">
        <div className="container text-left">
          <p className="mb-6 text-lg">
            Want to see some of our work in action?
          </p>
          <hr className="border-white w-full mb-4" />
          <h1 className="font-bold text-[72.42px] mb-6">
            Check Out The Film Page
          </h1>
          <div className="flex justify-end">
            <img
              src={Arrow_Down_Right_LG}
              className="w-16 h-16"
              alt="Arrow Down Right"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FilmLinkSection;

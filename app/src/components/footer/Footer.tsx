import { Link } from 'react-router-dom';
import Facebook from '@public/icons/Facebook';
import Twitter from '@public/icons/Twitter';
import Linkedin from '@public/icons/Linkedin';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-10 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-6">Lights. Camera. Action.</h2>
        <p className="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
        <div className="mb-10">
          <button className="bg-transparent text-white mr-4 py-3 px-5 border-2 border-white rounded">
            Apply Now
          </button>
          <button className="bg-transparent text-white py-3 px-5 border-2 border-white rounded">
            Contact
          </button>
        </div>
        <hr className="mb-6 opacity-25" />
        <div className="flex py-6 justify-between items-center flex-col md:flex-row">
          <div />
          <div />
          <p className="mb-6 md:mb-0 relative right-[40px]">
            © {year} NaijaRise Maniam Media. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-white"
            >
              <Facebook width="15" height="15" fill="#fff" />
            </Link>
            <Link
              to="/"
              className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-white"
            >
              <Linkedin width="15" height="15" fill="#fff" />
            </Link>
            <Link
              to="/"
              className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-white"
            >
              <Twitter width="15" height="15" fill="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

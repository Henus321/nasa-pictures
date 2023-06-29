import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col text-center bg-whiteTransparent">
      <div className="container flex flex-col w-full justify-around items-center p-8 mt-4 mx-auto md:space-y-4 md:flex-row">
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold px-8 md:py-2">NASA PICTURES</h2>
          <p className="hidden mx-auto md:flex">Developed by Alexandr Erkhov</p>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <a
            className="mx-auto"
            href="https://www.nasa.gov/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="hidden w-20 h-20 md:flex" src={logo} alt="Logo" />
          </a>
          <p>Based on Astronomy Picture of the Day</p>
        </div>
        <div className="mt-4 flex flex-col flex-1 md:mt-0">
          <div className="flex justify-center space-x-4 text-4xl">
            <a
              className="mb-2 hover:text-blue-800 active:text-blue-900"
              href="https://github.com/Henus321"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="mb-2 hover:text-blue-800 active:text-blue-900"
              href="https://www.youtube.com/c/APODVideos"
              rel="noreferrer"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              className="mb-2 hover:text-blue-800 active:text-blue-900"
              href="https://instagram.com/nasa"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="">Support: tyrantbud@yandex.ru</p>
        </div>
      </div>
      <span className="w-4/5 mx-auto p-6 border-t border-gray-500">
        2022 © all rights not reserved
      </span>
    </div>
  );
};

export default Footer;

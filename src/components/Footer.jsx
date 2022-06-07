import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-tertiary w-full mt-4 p-8 shadow-inner">
      <div className="flex items-center justify-between space-x-8">
        <a
          href="https://www.nakkerud.studio"
          target="_blank"
          className="px-4 text-left text-white font-semibold text-lg hover:text-tertiary"
          rel="noreferrer"
        >
          &copy; Nakkerud Studio 2022
        </a>
        <a
          href="https://github.com/tommenbro/Rick-Morty-Info"
          target="_blank"
          rel="noreferrer"
          className="text-white text-lg hover:scale-105"
        >
          <FaGithub />
        </a>
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          <h1 className="px-4 text-left text-white font-base text-md hover:text-tertiary">
            API
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full border-secondary bg-primary px-12 shadow-xl flex items-center justify-between h-20 font-semibold ">
      <h1 className="text-2xl font-bold ml-4 text-left text-primary">
        Rick & Morty Info
      </h1>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <a href="/">
      <div className="flex fixed top-0 z-10 w-full border-secondary bg-primary px-12 shadow-xl items-center justify-between h-20 font-semibold ">
        <h1 className="text-2xl font-bold ml-4 text-center md:text-left text-primary">
          Rick And Morty Character Info
        </h1>
      </div>
    </a>
  );
};

export default Navbar;

import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div className="flex justify-between items-center bg-secondary w-full pt-8 pl-8">
      <div className="flex  justify-between bg-secondary md:w-[800px] w-[400px]  p-2">
        <div className="flex  w-full bg-primary md:flex-row p-8 shadow-xl hover:shadow-2xl hover:scale-105 ease-in-out duration-200 rounded-xl">
          <img
            className="w-24 md:mx-0 h-24 md:w-56 md:h-56 rounded-xl"
            src={character.image}
            alt={character.name}
          />
          <div className="text-white flex-col pt-0 py-2 md:px-8 text-lg text-justify">
            <h3 className="font-bold text-xl pb-4 pt-4 md:pt-0 ">
              {character.name}{' '}
            </h3>
            <p className="text-base font-light pb-2">{character.type}</p>
            <p className="pb-2 text-base font-semibold">
              {character.species}, <span>{character.gender}</span>
            </p>
            <p className="pb-2 text-sm">
              Status:{' '}
              <span className="text-base font-semibold">
                {character.status}
              </span>
            </p>
            <p className="pb-2 text-sm">
              Origin:{' '}
              <span className="font-semibold text-base">
                {character.origin.name}
              </span>
            </p>
            <p className="pb-2 text-sm">
              Last known location:{' '}
              <span className="font-semibold text-base">
                {character.location.name}
              </span>
            </p>
            <p className="text-sm">
              First seen: {character.created.split('T', 1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

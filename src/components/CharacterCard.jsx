import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div className="flex w-[800px]  p-8">
      <div className="flex w-full  flex-row p-8 bg-primary rounded-xl">
        <img
          className="w-56 h-56 rounded-xl"
          src={character.image}
          alt={character.name}
        />
        <div className="text-primary flex-col py-2 px-8 text-lg">
          <h3 className="font-bold pb-4">
            {character.name}{' '}
            <span className="text-base font-semibold pl-2">
              {'  '}
              {character.type}
            </span>
          </h3>
          <p className="pb-2 text-base font-semibold">
            {character.species}, <span>{character.gender}</span>
          </p>
          <p className="pb-4 text-sm">
            Status:{' '}
            <span className="text-base font-semibold">{character.status}</span>
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
          <p className="text-sm">Aired: {character.created.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useQuery } from 'react-query';
import CharacterCard from './CharacterCard';

export default function Characters() {
  const fetchCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    return res.json();
  };

  const { data, status } = useQuery('characters', fetchCharacters);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return (
      <div className="bg-red-400 text-pink-700 text-lg p-4">
        {status.toString()}
      </div>
    );
  }

  return (
    <div className="bg-secondary w-full mt-20">
      {data.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /*interface Response {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Results[];
}

interface Results {
  created: Date;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
*/
}

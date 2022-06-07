import React, { useEffect, useState } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState<Response | null>(null);

  const fetchCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    console.log(data);
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (!characters) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-red-500 w-full rounded-lg">
      {characters.results?.map((character) => (
        <div className="font-semibold w-1/2 bg-blue-500" key={character.id}>
          {character.name}
        </div>
      ))}
    </div>
  );
}

interface Response {
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

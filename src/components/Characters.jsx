import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CharacterCard from './CharacterCard';

export default function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return res.json();
  };

  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
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
      <div className="ml-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((old) => old - 1)}
          className="text-white w-24 bg-primary px-4 py-1 m-4 text-base font-semibold rounded-xl hover:bg-tertiary hover:scale-105 duration-75 ease-in-out active:text-secondary"
        >
          Previous
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((old) => old + 1)}
          className="text-white w-24 bg-primary px-4 py-1 m-4 text-base font-semibold rounded-xl hover:bg-tertiary hover:scale-105 duration-75 ease-in-out active:text-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

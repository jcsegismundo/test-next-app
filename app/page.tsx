import './page.scss';

import PokemonButton from '@components/PokemonButton';

const home = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151/');
  const pokemon = await data.json();
  console.log(pokemon);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-indigo-400">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-indigo-300 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-2xl font-bold leading-none text-zinc-50">
            Test Pokedex app using Next.js
          </h1>
          <p className="text-l text-zinc-50">List of first 151 Pokemon</p>
          <div className="flex flex-col flex-wrap gap-1">
            {pokemon.results.map((item, idx) => (
              <PokemonButton key={idx} dexNumber={idx} name={item.name} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;

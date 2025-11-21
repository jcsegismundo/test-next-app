'use server';
import { capitalizeName } from '@utils/helpers';
import Body from './_body';
import Footer from './_footer';

const PokemonPage = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();
  const types = pokemon.types;
  const stats = pokemon.stats;

  // for legacy pikachu sounds lol
  const audioSrc =
    id === '25' || id === '26' ? pokemon.cries.legacy : pokemon.cries.latest;

  const iconUrl = pokemon.sprites.other['home'].front_default;
  const capitalizedName = capitalizeName(pokemon.name);

  return (
    <div className="flex flex-col min-h-screen items-center py-24 font-sans bg-indigo-400">
      <Body
        name={capitalizedName}
        iconUrl={iconUrl}
        dexNumber={Number(id)}
        cry={audioSrc}
        types={types}
        stats={stats}
      />
      <Footer dexNumber={Number(id)} />
    </div>
  );
};

export default PokemonPage;

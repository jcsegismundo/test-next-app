'use client';
import { capitalizeName } from '@utils/helpers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IPokemonButtonProps {
  dexNumber: number;
  name: string;
}

const PokemonButton: React.FC<IPokemonButtonProps> = ({
  dexNumber,
  name
}: IPokemonButtonProps) => {
  // indices are 0 based so we add 1
  const id = dexNumber + 1;

  return (
    <Link href={`/pokemon/${id}`}>
      <button className="flex px-3 py-1 flex-row gap-x-4 items-center bg-blue-400 rounded-md w-[200px] hover:bg-blue-300 focus:bg-blue-500">
        <p className="flex flex-row items-left w-12 text-zinc-600 italic">
          #{id.toString().padStart(4, '0')}
        </p>
        <div>
          <p className="italic">{capitalizeName(name)}</p>
        </div>
      </button>
    </Link>
  );
};

export default PokemonButton;

'use client';
import Image from 'next/image';
import { capitalizeName } from '@utils/helpers';
import { useRef } from 'react';
import StatBlock, { IStatApi } from './_statBlock';

export interface IPokemonPageBody {
  iconUrl: string;
  name: string;
  dexNumber: number;
  cry: string;
  types: object[];
  stats: IStatApi[];
}

const Body = ({ iconUrl, name, dexNumber, cry, stats }: IPokemonPageBody) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current!.currentTime = 0;

      audioRef.current!.play();
    }
  };

  return (
    <main className="flex rounded-2xl min-h-l w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-indigo-300 sm:items-start">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
        <h1 className="max-w-md text-2xl font-bold leading-none text-zinc-50">
          <span className="text-zinc-100 font-light mr-2">
            #{dexNumber.toString().padStart(4, '0')}
          </span>
          {name}
        </h1>
        <div className="flex flex-row justify-between w-full">
          <div className="flex rounded-2xl bg-white min-w-[300px] min-h-[300px] w-[300px] h-[300px] justify-center items-center border-2 border-indigo-200">
            <Image
              className="hover:cursor-pointer"
              src={iconUrl}
              width={250}
              height={250}
              alt={`Official artwork of ${name}`}
              onClick={handleImageClick}
            />
            <audio ref={audioRef}>
              <source id="cry" src={cry} type="audio/ogg" />
            </audio>
          </div>
          <StatBlock stats={stats} />
        </div>
      </div>
    </main>
  );
};

export default Body;

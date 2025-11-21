import Link from 'next/link';

interface IFooterProps {
  dexNumber: number;
}

const Footer = ({ dexNumber }: IFooterProps) => {
  const nextNumber = dexNumber + 1;
  const prevNumber = dexNumber - 1;
  return (
    <footer className="flex flex-row justify-around w-2xl">
      {prevNumber > 0 ? (
        <Link href={`/pokemon/${prevNumber}`}>
          <button>Prev</button>
        </Link>
      ) : (
        <button></button>
      )}
      <Link href="/">
        <button>Home</button>
      </Link>

      {nextNumber <= 151 ? (
        <Link href={`/pokemon/${nextNumber}`}>
          <button>Next</button>
        </Link>
      ) : (
        <button></button>
      )}
    </footer>
  );
};

export default Footer;

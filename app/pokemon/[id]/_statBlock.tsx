'use client';

import './styles.scss';

export interface IStatApi {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IStatBlockProps {
  stats: IStatApi[];
}

const StatComponent = ({ stat }: { stat: IStatApi }) => {
  const getBarColor = (value) => {
    const S = 80; // Saturation (Vibrant)
    const L = 50; // Lightness (Standard brightness)

    // Ensure value is within the 1-255 range
    const clampedValue = Math.min(255, Math.max(1, value));
    let hue = 0;

    // 1. Red Zone (< 75) - Fixed Hue 0
    if (clampedValue < 75) {
      hue = 0; // Red
    }

    // 2. Orange (75-100) - Fixed Hue 30
    else if (clampedValue >= 75 && clampedValue <= 100) {
      hue = 30; // Orange
    }

    // 3. Yellow (101-150) - Fixed Hue 60
    else if (clampedValue >= 101 && clampedValue <= 150) {
      hue = 60; // Yellow
    }

    // 4. Green (151-200) - Fixed Hue 120
    else if (clampedValue >= 151 && clampedValue <= 200) {
      hue = 120; // Green
    }

    // 5. Above 200: Solid Cyan (User requested) - Fixed Hue 180
    else {
      // value > 200
      hue = 180; // Cyan
    }

    // Return the HSL string
    return `hsl(${Math.round(hue)}, ${S}%, ${L}%)`;
  };

  return (
    <div
      className="shiny h-5 flex flex-row items-center justify-startl pl-2 font-semibold transition-all duration-75 text-white rounded-md text-shadow-sm"
      style={{
        backgroundColor: getBarColor(stat.base_stat),
        width: `${Math.floor((100 * stat.base_stat) / 255)}%`
      }}
    >
      {stat.base_stat}
    </div>
  );
};

const StatBlock: React.FC<IStatBlockProps> = ({ stats }: IStatBlockProps) => {
  const hp = stats.find((e) => e.stat.name === 'hp');
  const attack = stats.find((e) => e.stat.name === 'attack');
  const defense = stats.find((e) => e.stat.name === 'defense');
  const spAtk = stats.find((e) => e.stat.name === 'special-attack');
  const spDef = stats.find((e) => e.stat.name === 'special-defense');
  const speed = stats.find((e) => e.stat.name === 'speed');

  const sortedStats = [hp, attack, defense, spAtk, spDef, speed];

  return (
    <div className="flex flex-col gap-2 h-full w-full ml-2">
      <h1 className="text-l text-white font-bold">Stats</h1>
      {sortedStats.map((stat) => (
        <StatComponent key={stat?.stat.name} stat={stat!} />
      ))}
    </div>
  );
};

export default StatBlock;

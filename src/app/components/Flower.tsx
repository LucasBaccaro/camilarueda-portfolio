interface FlowerProps {
  size?: number;
  color?: string;
}

export function Flower({ size = 12, color = 'white' }: FlowerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      {/* 6 pétalos gorditos y redondeados estilo retro daisy */}
      <ellipse cx="50" cy="18" rx="11" ry="20" />
      <ellipse cx="50" cy="18" rx="11" ry="20" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="18" rx="11" ry="20" transform="rotate(120 50 50)" />
      <ellipse cx="50" cy="18" rx="11" ry="20" transform="rotate(180 50 50)" />
      <ellipse cx="50" cy="18" rx="11" ry="20" transform="rotate(240 50 50)" />
      <ellipse cx="50" cy="18" rx="11" ry="20" transform="rotate(300 50 50)" />
      {/* Centro circular */}
      <circle cx="50" cy="50" r="14" fill={color} />
      {/* Hueco del centro */}
      <circle cx="50" cy="50" r="6" fill="black" />
    </svg>
  );
}

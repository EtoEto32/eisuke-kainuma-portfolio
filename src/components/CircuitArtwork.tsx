export default function CircuitArtwork() {
  return (
    <svg className="interface-art" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <circle cx="230" cy="130" r="90" />
      <circle cx="230" cy="130" r="115" strokeDasharray="2 12" />
      <path d="M0 50H90L140 100H230L275 145H400M50 250H130L195 185H310L355 230H400M230 0V55M305 130H400M230 220V300" />
      <path className="circuit-trace" d="M0 50H90L140 100H230L275 145H400" />
      {[
        [90, 50],
        [140, 100],
        [230, 100],
        [195, 185],
        [310, 185],
      ].map(([cx, cy]) => (
        <circle key={cx + ',' + cy} cx={cx} cy={cy} r="4" />
      ))}
    </svg>
  )
}

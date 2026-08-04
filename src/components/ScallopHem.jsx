// Scalloped bottom hem for the header — a repeating row of cream half-circles
// that hang below the bar, giving an eyelet-lace edge. SVG pattern is responsive
// and renders consistently across browsers (unlike CSS mask on a sticky element).
export default function ScallopHem() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-full -mt-px h-7 w-full text-cream"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="scallop-hem"
          width="48"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          {/* pure downward semicircle bumps, meeting at cusps (no connecting line) */}
          <path d="M0 0 A24 24 0 0 0 48 0 Z" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#scallop-hem)" />
    </svg>
  )
}

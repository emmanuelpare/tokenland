export default function MondrianMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="30" height="30" fill="#031D2A" />
      <rect x="0" y="0" width="18" height="18" fill="#0B2C3B" />
      <rect x="18" y="0" width="12" height="11" fill="#E8602C" />
      <rect x="0" y="18" width="11" height="12" fill="#2B5C9C" />
      <rect x="11" y="18" width="19" height="12" fill="#0B2C3B" />
      <path d="M18 0V30M0 18H30M11 18V30" stroke="#03161F" strokeWidth="2.4" />
    </svg>
  );
}

export default function Waves() {
  return (
    <svg
      className="pointer-events-none absolute -left-[5%] bottom-0 -z-10 h-72 w-[110%] animate-drift"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave" x1="0" x2="1">
          <stop offset="0" stopColor="#ddd6fe" stopOpacity="0.75" />
          <stop offset="0.55" stopColor="#c7d2fe" stopOpacity="0.6" />
          <stop offset="1" stopColor="#a5f3fc" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <path fill="url(#wave)" d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,154.7C1200,139,1320,149,1440,170.7L1440,320L0,320Z" />
      <path fill="url(#wave)" opacity="0.5" d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L0,320Z" />
    </svg>
  );
}

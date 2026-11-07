const BLOBS = [
  "-left-[10%] top-[5%] h-[28rem] w-[28rem] bg-violet-300/50",
  "-right-[8%] top-[18%] h-[26rem] w-[26rem] bg-cyan-200/60 [animation-delay:-6s]",
  "-bottom-[10%] left-[30%] h-[30rem] w-[30rem] bg-indigo-200/60 [animation-delay:-12s]",
];

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {BLOBS.map((blob) => (
        <div key={blob} className={"absolute rounded-full blur-3xl " + blob} />
      ))}
    </div>
  );
}
